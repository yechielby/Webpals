import { Component, OnInit } from '@angular/core';
import { Grade } from './grade.model';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Student } from '../student-list/student.model';

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.sass']
})
export class GradeListComponent implements OnInit {
  id: number;
  grades: Grade[];
  student: Student;
  _examName:string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.dataService.getStudentByID(this.id).subscribe(
            (response: Student) => {
              this.student = response;

              this.dataService.getGrades(this.student.grades).subscribe(
                (res: Grade[]) => {
                  this.grades = res;
                }
              );
            }
          );
        }
      );
  }

}
