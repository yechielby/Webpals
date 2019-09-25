import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Student } from '../student-list/student.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { StudentPagination } from '../student-list/student-pagination.model';
import { Grade } from '../grade-list/grade.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiURL = 'http://localhost:8000/api/';

  constructor(private http: HttpClient, private authService: AuthService) { }

  isLogin() {
    return this.authService.isAuthenticated();
  }

  getHttpOptionsAuth() {
    const token = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
      .append('Accept', 'application/json')
      .append('Authorization', 'Bearer ' + token),
      // params: new HttpParams().set('auth', token)
    };
    return httpOptions;
  }

  /* Students */
  getStudents(url = this.apiURL + 'students'): Observable<StudentPagination> {
    return this.http.get<StudentPagination>(url);
  }
  getStudentsWithParams(fName: string, lName: string): Observable<Student[]> {
    let url = this.apiURL + 'students';
    url += '?';
    if (fName) { url += 'fName=' + fName; }
    if (fName && lName) { url += '&'; }
    if (lName) { url += 'lName=' + lName; }
    return this.http.get<Student[]>(url).pipe(
      map(res => res['data'])
    );
  }
  getStudentByID(id: number): Observable<Student> {
    const url = this.apiURL + 'students/' + id;
    return this.http.get<Student>(url).pipe(
      map(res => res['data'])
    );
  }
  getStudent(url: string): Observable<Student> {
    return this.http.get<Student>(url);
  }
  createStudent(fName: string, lName: string): Observable<Student> {
    const url = this.apiURL + 'students';
    return this.http.post<Student>(url, {fName, lName}, this.getHttpOptionsAuth());
  }
  updateStudent(url: string, fName: string, lName: string): Observable<Student> {
    return this.http.put<Student>(url, {fName, lName}, this.getHttpOptionsAuth());
  }
  deleteStudent(id: number): Observable<any> {
    const url = this.apiURL + 'students/' + id;
    return this.http.delete(url, this.getHttpOptionsAuth());
  }

  /* grades */
  getGrades(url: string): Observable<Grade[]> {
    return this.http.get<Grade[]>(url).pipe(
      map(res => res['data'])
    );
  }
  getGrade(url: string): Observable<Grade> {
    return this.http.get<Grade>(url).pipe(
      map(res => res['data'])
    );
  }
  getGradebyIDS(studentId: number, gradeId: number): Observable<Grade> {
    const url = this.apiURL + 'students/' + studentId + '/grades/' + gradeId;
    return this.http.get<Grade>(url).pipe(
      map(res => res['data'])
    );
  }
  createGrade(studentId: number, examName: string, grade: number): Observable<Grade> {
    const url = this.apiURL + 'students/' + studentId + '/grades';
    return this.http.post<Grade>(url, {examName, grade}, this.getHttpOptionsAuth());
  }
  updateGrade(studentId: number, gradeId: number, examName: string, grade: number): Observable<Grade> {
    const url = this.apiURL + 'students/' + studentId + '/grades/' + gradeId;
    return this.http.put<Grade>(url, {examName, grade}, this.getHttpOptionsAuth());
  }
  deleteGrade(url: string): Observable<any> {
    return this.http.delete(url, this.getHttpOptionsAuth());
  }
}
