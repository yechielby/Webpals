import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../shared/data.service';
import { StudentPagination } from './student-pagination.model';
import { Student } from './student.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.sass']
})
export class StudentListComponent implements OnInit {
  @ViewChild('f') searchForm: NgForm;
  sp: StudentPagination;
  students: Student[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.onChangePage(undefined);
  }

  onChangePage(link: string) {
    this.dataService.getStudents(link).subscribe(
      (response: StudentPagination) => {
        this.sp = response;
        this.students = this.sp.data;
      }
    );
  }

  onSearch() {
    const fName = this.searchForm.value.fName;
    const lName = this.searchForm.value.lName;
    this.dataService.getStudentsWithParams(fName, lName).subscribe(
      (response: Student[]) => {
        this.sp = null;
        this.students = response;
      }
    );
  }
  onReset() {
    this.onChangePage(undefined);
  }
}
