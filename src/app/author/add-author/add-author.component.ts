import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  ngOnInit(): void {
   
  }
  constructor(private service:AuthorService){}
  processValidation:any;
  reactiveForm=new FormGroup({
    author:new FormControl('',Validators.required)
  })

  AuthorForm(){
    console.log(this.reactiveForm.value)
    this.processValidation=true;
    if(this.reactiveForm.valid){
      this.service.addAuthor(this.reactiveForm.value).subscribe((result)=>{
        console.log(result);
      })
    }


  }
}
