import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-auth/login/login.component';
import { SignupComponent } from './user-auth/signup/signup.component';
import { AdminDashComponent } from './admin-module/admin-dash/admin-dash.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"admin-dash",
    component:AdminDashComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
