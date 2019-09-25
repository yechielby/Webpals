import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Grade } from '../grade.model';

@Component({
  selector: 'app-grade-edit',
  templateUrl: './grade-edit.component.html',
  styleUrls: ['./grade-edit.component.sass']
})
export class GradeEditComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;
  editMode = false;
  editGradeId: number;
  editStudentId: number;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.editGradeId = +params.gid;
          this.editStudentId = +params.id;
          this.editMode = !Number.isNaN(this.editGradeId);

          if (this.editMode) {
            this.dataService.getGradebyIDS(this.editStudentId, this.editGradeId).subscribe(
              (response: Grade) => {
                this.setGradeToEdit(response);
              }
            );
          }
        }
      );
  }
  setGradeToEdit(grade: Grade) {
    this.editForm.setValue({
      examName: grade.examName,
      grade: grade.grade
    });
  }

  onSubmit() {
    const value = this.editForm.value;
    if (this.editMode) {
      this.dataService.updateGrade(this.editStudentId, this.editGradeId, value.examName, value.grade).subscribe(
        (response) => {
          this.router.navigate(['/students', this.editStudentId]);
        }
      );
    } else {
      this.dataService.createGrade(this.editStudentId, value.examName, value.grade).subscribe(
        (response) => {
          this.router.navigate(['/students', this.editStudentId]);
        }
      );
    }
    // this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.editForm.reset();
  }

}
