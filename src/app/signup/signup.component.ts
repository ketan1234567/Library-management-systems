import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SiginService } from '../services/sigin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:SiginService,private route:Router) { }

  ngOnInit(): void {
  }



  reactiveForm=new FormGroup({
    username:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })


  signUp(){
  this.service.SignUp(this.reactiveForm.value).subscribe((result)=>{
  console.log(result);
  })
  }


}
