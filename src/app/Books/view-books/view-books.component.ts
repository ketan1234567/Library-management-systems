import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { BooksService } from 'src/app/Category/BooksService';
import { Observable, Subscriber, subscribeOn } from 'rxjs';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/author/author.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyObjectType } from './MyObjectType';





@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  categoryData:any
  AuthorData:any
  image: any;
  mainData:any
  editBooks:any
  editBooksValue: any;
  data:any
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  constructor(
    private  domSanitizer: DomSanitizer,
    private  service: FileUploadService,
    private serviceB:BooksService,
    private serviceAu:AuthorService,
    private router:Router) {}
  selectFile(event:any):void{
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
    //console.log(this.reactiveForm)
  }
upload(): void {
}

AddbookImages(){
}

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
   this.mainData=result
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

  onEditUser(id:any){
   // alert(id)
      this.service.GetEditBooks(id).subscribe((result)=>{
      //console.log(result);
      this.editBooks=result.body
      this.editBooksValue=result.body
     // console.log(this.editBooksValue);
      
      this.reactiveForm.setValue({id:this.editBooksValue._id,book_name:this.editBooksValue.book_name,author:this.editBooksValue.author,price:this.editBooksValue.price,category:this.editBooksValue.category,isbn_number:this.editBooksValue.isbn_number}
       )

    })
  }
  onSubmit(){

  }

  UpdateAllDataImages(){
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      const data = this.reactiveForm.value as { id: any; book_name: string | null; author: string | null; price: string | null; category: string | null; isbn_number: string | null; data?: any };
      //console.log(file?.name);
      data.data=file?.name
      console.log(data);
  
   
     
      if (file) {
        this.currentFile = file;
        //console.log(file);
        //console.log(this.reactiveForm.value);
        const ddd=this.reactiveForm.value
        this.service.MainUploadDataFiles(this.currentFile,this.reactiveForm.value).subscribe(

          

          {

          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round((100 * event.loaded) / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.service.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';  
            }

            this.currentFile = undefined;
          },

        });
        const data=this.router
        if(this.currentFile){
          Swal.fire({ text: "Successfully Submit", icon: 'success'})
          .then(function (result) 
          
          {data.navigate(['/view-books'])}
          )
        }else{
          Swal.fire({ text: "Error", icon: 'error'}).then(function (result) {data.navigate(['/tables'])})
        }



      }
  
    }
  }

  //  console.log("in update form",this.reactiveForm.value)

   
    

  

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
