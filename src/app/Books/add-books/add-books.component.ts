import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploadService } from '../file-upload.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  constructor(private uploadService:FileUploadService,private router:Router ){}
  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }
  AddBooks(){
    console.log(this.reactiveForm.value)

  }

  reactiveForm=new FormGroup({
    book_name:new FormControl('',Validators.required),
    author_name:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    category:new FormControl('',Validators.required),
    isbn_number:new FormControl('',Validators.required)
  })

  selectFile(event:any):void{
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
    
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile).subscribe(
          
          {

          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round((100 * event.loaded) / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFiles();
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

      this.selectedFiles = undefined;
    }
  }

}
