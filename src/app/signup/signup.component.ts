import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SiginService } from '../services/sigin.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:SiginService,private route:Router) { }
  processValidation:any
  ngOnInit(): void {
    this.generateUUIDV4()
  }
  



  reactiveForm=new FormGroup({
    fullname:new FormControl('',Validators.required),
    mobile:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

   generateUUIDV4() {
    // http://www.ietf.org/rfc/rfc4122.txt

    const uuid = crypto.randomUUID();
    console.log(uuid);
    
    return uuid
  }
  signUp(){
    this.processValidation=true
    if(this.reactiveForm.valid){
      this.service.SignUp(this.reactiveForm.value).subscribe((result)=>{
        console.log(result);
        const data=this.route
        Swal.fire({ text: "signUp Succfully", icon: 'success'}).then(function (result) {
          if (true) {
            data.navigate(['/sign-in'])
          }
      })
      
       
        })

    }

  }


}
