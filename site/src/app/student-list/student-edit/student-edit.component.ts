import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/shared/data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.sass']
})
export class StudentEditComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;
  editMode = false;
  etitURL: string;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          const editId = +params.id;
          this.editMode = !Number.isNaN(editId);

          if (this.editMode) {
            this.dataService.getStudentByID(editId).subscribe(
              (response: Student) => {
                this.setStudentToEdit(response);
              }
            );
          }
        }
      );
  }

  setStudentToEdit(student: Student) {
    this.etitURL = student.edit;
    this.editForm.setValue({
      fName: student.fName,
      lName: student.lName
    });
  }

  onSubmit() {
    const value = this.editForm.value;
    if (this.editMode) {
      this.dataService.updateStudent(this.etitURL, value.fName, value.lName).subscribe(
        (response) => {
          this.router.navigate(['/students']);
        }
      );
    } else {
      this.dataService.createStudent(value.fName, value.lName).subscribe(
        (response) => {
          this.router.navigate(['/students']);
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
