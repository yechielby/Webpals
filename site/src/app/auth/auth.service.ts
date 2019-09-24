import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  errorMessage = '';
  onError = new Subject<string>();

  constructor(private router: Router) { }
  signupUser(name: string, email: string, password: string) {
    console.log('signup',name,email,password);
    this.router.navigate(['/']);
    this.token = 'not-null';
    // this.onError.next(this.errorMessage);
  }
  signinUser(email: string, password: string) {
    console.log('signin',email,password);
    this.router.navigate(['/']);
    this.token = 'not-null';
    // this.onError.next(this.errorMessage);
  }
  getToken() {
    return this.token;
  }
  logout() {
    this.token = null;
  }
  isAuthenticated(): boolean {
    return this.token != null;
  }
}
