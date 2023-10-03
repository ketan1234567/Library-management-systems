import { Component, OnInit, VERSION } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SiginService } from '../services/sigin.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  userDetails:any
  userData:any
  userRole:any
  userId:any

  name = 'Angular ' + VERSION.major;
  passwordsMatching = false;
  isConfirmPasswordDirty = false;
  confirmPasswordClass = 'form-control';
  newPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    ),
  ]);
  confirmPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    ),
  ]);

  resetPasswordForm = this.formBuilder.group(
    {
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword,
    },
    {
      validator: this.ConfirmedValidator('newPassword', 'confirmPassword'),
    }
  );

  constructor(private formBuilder: FormBuilder,private services:SiginService,private router:Router) {}
  ngOnInit() {
    this.userDetails = atob(document.cookie.split('.')[1]);
    this.userData=JSON.parse(this.userDetails).fullname;
    this.userRole=JSON.parse(this.userDetails).role;
    this.userId=JSON.parse(this.userDetails).id;
     console.log(this.userData);

  }

  onSubmit() {
 this.resetPasswordForm.value._id=this.userId
 this.resetPasswordForm.value.email=this.userData
 this.resetPasswordForm.value.role=this.userRole
 this.resetPasswordForm.value.password=this.resetPasswordForm.value.confirmPassword
    console.log(this.resetPasswordForm.value);
    const vishal=this.resetPasswordForm.value
    this.services.UpdateAdminPassword(vishal).subscribe((result)=>{
      const data=this.router
      if(result.statusText==="OK"){
        Swal.fire({ text: "Updated Successfully", icon: 'success'}).then(function (result) {data.navigate(['/sign-in'])})
      }else{
        Swal.fire({ text: "Error", icon: 'error'})
      }
      console.log(result,"In result")
  
     //console.log(result);
     
    })

    if (!this.resetPasswordForm?.valid) {
      return;
    }
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

}
