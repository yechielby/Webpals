import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  errorMessage = '';

  constructor(private authServic: AuthService) { }

  ngOnInit() {
    this.authServic.onError
      .subscribe(
        (error: string) => this.errorMessage = error
      );
  }

  onSignup() {
    this.errorMessage = '';
    const name = this.signupForm.value.name;
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    // this.signupForm.reset();
    this.authServic.signupUser(name, email, password);
  }
}
