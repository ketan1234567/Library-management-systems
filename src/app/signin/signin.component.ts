import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SiginService } from '../services/sigin.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  processValidation:any
  constructor(private service:SiginService,private router:Router) { }

  ngOnInit(): void {
  }


  reactiveForm=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  signin(){
    this.processValidation=true
    if(this.reactiveForm.valid){
      this.service.CheckLoginData(this.reactiveForm.value).subscribe((result)=>{
        console.log(result);
        const data=this.router
        if(result.statusText==="OK"){
          Swal.fire({ text: result.statusText, icon: 'success'}).then(function (result) {data.navigate(['/'])})
        }else{
          Swal.fire({ text: "Error", icon: 'error'}).then(function (result) {data.navigate(['/tables'])})
        }
      })

    }

    
    
    
 
  }
  


}
