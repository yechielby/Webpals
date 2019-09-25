import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  name: string;
  token: string;
  errorMessage = '';
  onError = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) { }

  signupUser(name: string, email: string, password: string, confirm_password: string) {
    this.http.post('http://localhost:8000/api/register', {name, email, password, confirm_password}).subscribe(
      (res: {success: {token: string, name: string}}) => {
        this.token = res.success.token;
        this.name = res.success.name;
        this.router.navigate(['/students']);
      },
      (e) => {
        this.errorMessage = '';
        const error = e.error.error;
        if (error.name) {this.errorMessage += 'Name: ' + error.name + '.<br>'; }
        if (error.email) {this.errorMessage += 'Email: ' + error.email + '.<br>'; }
        if (error.password) {this.errorMessage += 'Password: ' + error.password + '.<br>'; }
        if (error.confirm_password) {this.errorMessage += 'Confirm Password: ' + error.confirm_password + '.<br>'; }

        this.onError.next(this.errorMessage);
      }
    );
  }
  signinUser(email: string, password: string) {
    this.http.post('http://localhost:8000/api/login', {email, password}).subscribe(
      (res: {success: {token: string, name: string}}) => {
        this.token = res.success.token;
        this.name = res.success.name;
        this.router.navigate(['/students']);
      },
      (e) => {
        this.errorMessage = '';
        const error = e.error.error;
        if (error.name) {this.errorMessage += 'Name: ' + error.name + '.<br>'; }
        if (error.email) {this.errorMessage += 'Email: ' + error.email + '.<br>'; }
        if (error.massage) {this.errorMessage +=  error.massage + '.<br>'; }
        this.onError.next(this.errorMessage);
      }
    );
  }
  getToken() {
    return this.token;
  }
  logout() {
    this.token = null;
    this.router.navigate(['/']);
  }
  isAuthenticated(): boolean {
    return this.token != null;
  }
}
