import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { JwPaginationComponent } from 'jw-angular-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { StudentListComponent } from './student-list/student-list.component';
import { GradeListComponent } from './grade-list/grade-list.component';
import { NameGradesPipe } from './grade-list/name-grades.pipe';
import { GradeEditComponent } from './grade-list/grade-edit/grade-edit.component';
import { StudentEditComponent } from './student-list/student-edit/student-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    StudentListComponent,
    GradeListComponent,
    NameGradesPipe,
    GradeEditComponent,
    StudentEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
