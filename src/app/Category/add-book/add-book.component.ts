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



  }
  processValidation:any
  constructor(private services:BooksService,private route:Router){


  //  console.log("this is constuector ");



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
      const data=this.route
      if(result.statusText==="OK"){
        Swal.fire({ text: result.statusText, icon: 'success'}).then(function (result) {data.navigate(['/tables'])})
      }else{
        Swal.fire({ text: "Error", icon: 'error'}).then(function (result) {data.navigate(['/tables'])})
      }
    })
  

  }
}
}