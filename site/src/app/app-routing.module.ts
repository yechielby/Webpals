import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { StudentListComponent } from './student-list/student-list.component';
import { GradeListComponent } from './grade-list/grade-list.component';
import { GradeEditComponent } from './grade-list/grade-edit/grade-edit.component';
import { StudentEditComponent } from './student-list/student-edit/student-edit.component';
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'students', children: [
    { path: '', component: StudentListComponent, pathMatch: 'full' },
    { path: 'new', component: StudentEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: GradeListComponent },
    { path: ':id/edit', component: StudentEditComponent, canActivate: [AuthGuard] },
    { path: ':id/grades/new', component: GradeEditComponent, canActivate: [AuthGuard] },
    { path: ':id/grades/:gid/edit', component: GradeEditComponent, canActivate: [AuthGuard] },
    
  ]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
