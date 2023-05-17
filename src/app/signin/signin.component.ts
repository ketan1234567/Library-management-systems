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

  constructor(private service:SiginService,private router:Router) { }

  ngOnInit(): void {
  }


  reactiveForm=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  signin(){
    this.service.CheckLoginData(this.reactiveForm.value).subscribe((result)=>{
      console.log(result);
      Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
        this.router.navigate(['/tables'])
    })
    
    
 
  }
  


}
