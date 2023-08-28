import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { BooksService } from 'src/app/Category/BooksService';
import { Subscriber, subscribeOn } from 'rxjs';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/author/author.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  categoryData:any
  AuthorData:any
  image: any;
  editBooks:any
  editBooksValue: any;
  constructor(
    private readonly domSanitizer: DomSanitizer,
    private readonly service: FileUploadService,
    private serviceB:BooksService,
    private serviceAu:AuthorService,

  ) {}
  ngOnInit() {
    this.AddbookImages()

    this.serviceAu.viewAuthor().subscribe((result)=>{
      this.AuthorData=result.body;
     // console.log(this.AuthorData)
    })
    this.serviceB.viewCategory().subscribe((result)=>{
      //console.log(result);
      this.categoryData=result.body
    })

    this.service.getAllData().subscribe((result)=>{
   this.image=result
   //console.log(result);
   
    })
  }
  reactiveForm=new FormGroup({
    id:new FormControl(),
    book_name:new FormControl('',Validators.required),
    author:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    category:new FormControl('',Validators.required),
    isbn_number:new FormControl('',Validators.required)
  })
  onSubmit(){

  }
  onEditUser(_id:any){
   // alert(id)
      this.service.GetEditBooks(_id).subscribe((result)=>{
      //console.log(result);
      this.editBooks=result.body._id
      this.editBooksValue=result.body
      this.reactiveForm.setValue({id:this.editBooks,book_name:this.editBooksValue.book_name,author:this.editBooksValue.author,price:this.editBooksValue.price,category:this.editBooksValue.category,isbn_number:this.editBooksValue.isbn_number})

    })
  }

  AddbookImages(){
  console.log(this.reactiveForm.value);
  }
  UpdateAllDataImages(){
    //console.log("in update form",this.reactiveForm.value)
    this.service.UpdatedBooks(this.reactiveForm.value).subscribe((result)=>{

      if(result.statusText==="OK"){
        Swal.fire({ text: "Updated Successfully", icon: 'success'}).then(
        )
      }else{
        Swal.fire({ text: "Error", icon: 'error'})
      }
      //console.log(result,"In result");


    }) 
    this.ngOnInit() 
    

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





}
