import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../BooksService';
import Swal from 'sweetalert2';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  userDetails:any
  userData:any
  userRole:any
  ngOnInit() {
    this.vishal()


  }
  processValidation:any
  constructor(private services:BooksService,private route:Router){
    this.userDetails = atob(document.cookie.split('.')[1]);
    this.userData=JSON.parse(this.userDetails).fullname;
    this.userRole=JSON.parse(this.userDetails).role;
    // console.log(this.userRole);


  }
  vishal(){
    console.log(this.userRole);
    if(this.userRole==1){
      console.log("This is ketan");
      

     
      
    }else{
   // window.location.href="/sign-in"
   this.route.navigate(['/sign-in'])
    }

    
    
  }


  reactiveForm=new FormGroup({
    category:new FormControl('',Validators.required),
    active:new FormControl('',Validators.required)
  })

categoryForm(){
  this.processValidation=true
  if(this.reactiveForm.valid){
  
    this.services.addCategory(this.reactiveForm.value).subscribe((result)=>{
      console.log(result);
      const data=this.router
      if(result.statusText==="OK"){
        Swal.fire({ text: result.statusText, icon: 'success'}).then(function (result) {data.navigate(['/tables'])})
      }else{
        Swal.fire({ text: "Error", icon: 'error'}).then(function (result) {data.navigate(['/tables'])})
      }
    })
  

  }
}
}