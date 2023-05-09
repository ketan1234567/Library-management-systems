import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../signup/signup.service';

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
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)

  })
  LoginForm(){
    this.processValidation = true;
    if(this.reactiveForm.valid) {
     this.service.checkLoginData(this.reactiveForm.value).subscribe((result)=>{
       alert("Data successfully checked")
       
     })
    }

  }

}
