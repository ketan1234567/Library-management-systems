import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signup.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  processValidation:any
  constructor(private service:SignupService){}
  ngOnInit(): void {
   
  }
  reactiveform=new FormGroup({
    username:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  });

  signUp(){
    this.processValidation = true;
    if(this.reactiveform.valid) {
      this.service.LoginForm(this.reactiveform.value).subscribe((result)=>{
        console.log(result)
          alert("Data Added ")
          this.reset()
      })
    }else{
    
    }



  }
  reset() {
    this.reactiveform.reset();
  }
  
}
