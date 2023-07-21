import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { BooksService } from 'src/app/Category/books.service';
import { Subscriber, subscribeOn } from 'rxjs';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  categoryData:any
  AuthorData:any
  image: any;
  constructor(
    private readonly domSanitizer: DomSanitizer,
    private readonly service: FileUploadService,
    private serviceB:BooksService
  ) {}
  ngOnInit() {

    this.service.getAllData().subscribe((result)=>{
   this.image=result
   console.log(result);
   
    })
  }
  reactiveForm=new FormGroup({
    book_name:new FormControl('',Validators.required),
    author:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    category:new FormControl('',Validators.required),
    isbn_number:new FormControl('',Validators.required)
  })
  onSubmit(){

  }
  onEditUser(){

  }
  AddDataImages(){

  }
  deleteuser(id:any){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed===true) {
        this.service.deleteAllData(id).subscribe((result)=>{
          Swal.fire(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          )
          this.ngOnInit();
        })
      } 
    })
    console.log(id)
  }

  UpdateAllDataImages(){

  }
  upload(){
    
  }
  AddbookImages(){

  }

}
