import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../signup/signup.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  processValidation:any
  constructor(private service:SignupService){}
  ngOnInit(): void {
   
  }
  reactiveForm=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)

  })
  LoginForm(){
    this.processValidation = true;
    if(this.reactiveForm.valid) {
     this.service.checkLoginData(this.reactiveForm.value).subscribe((result)=>{
      Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
       
     })
    }

  }

  simpleAlert(){
    Swal.fire('Hello world!');
  }
   
  alertWithSuccess(){
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
  }
   
  /*confirmBox(){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }*/

}
