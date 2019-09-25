import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {
  @ViewChild('f') signinForm: NgForm;
  errorMessage = '';

  constructor(private authServic: AuthService) { }

  ngOnInit() {
    this.authServic.onError
      .subscribe(
        (error: string) => this.errorMessage = error
      );
  }


  onSignin() {
    this.errorMessage = '';
    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;
    // this.signinForm.reset();
    this.authServic.signinUser(email, password);
  }
}
