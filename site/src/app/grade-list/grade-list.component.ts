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
  islogin: boolean;
  _examName:string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.islogin = this.dataService.isLogin();
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.getData();
        }
      );
  }
  getData() {
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
  onDelete(id: number) {
    const url = this.student.grades + '/' + id;
    console.log(url);
    this.dataService.deleteGrade(url).subscribe(
      (response: Student[]) => {
        this.getData();
      }
    );
  }
}
