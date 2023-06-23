import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

image:any
  constructor(
    private readonly domSanitizer: DomSanitizer,
    private readonly service: FileUploadService
  ) {}
  ngOnInit() {
this.service.getFiles().subscribe((result)=>{
this.image=URL.createObjectURL(result)
})
  }

  onEditUser(){

  }
  deleteuser(){

  }

}
