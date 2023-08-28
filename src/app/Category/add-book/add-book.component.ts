import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../BooksService';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  ngOnInit(): void {
  
  }
  processValidation:any
  constructor(private services:BooksService,private router:Router){}


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