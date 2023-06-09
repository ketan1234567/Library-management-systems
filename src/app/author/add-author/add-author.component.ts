import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from '../author.service';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  data:any
  ngOnInit(): void {
   
  }
  constructor(private service:AuthorService,private router:Router){}
  processValidation:any;
  reactiveForm=new FormGroup({
    author:new FormControl('',Validators.required)
  })

  AuthorForm(){
    console.log(this.reactiveForm.value)
    this.processValidation=true;
    if(this.reactiveForm.valid){
      const data=this.router
      this.service.addAuthor(this.reactiveForm.value).subscribe((result)=>{
        if(result.statusText==="OK"){
          Swal.fire({ text: result.statusText, icon: 'success'}).then(function (result) {data.navigate(['/view-author'])})
        }else{
          Swal.fire({ text: "Error", icon: 'error'}).then(function (result) {data.navigate(['/tables'])})
        }
      })
    }


  }
}
