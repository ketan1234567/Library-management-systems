import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    
    LoginComponent,
     SignupComponent,
            ForgotPasswordComponent,
            
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserAuthModule { }
