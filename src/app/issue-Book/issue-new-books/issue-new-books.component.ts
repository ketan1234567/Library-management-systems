import { Component, HostListener, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, combineLatest, filter, forkJoin, map, of, scan, timer } from 'rxjs';
import { FileUploadService } from 'src/app/Books/file-upload.service';
import { SiginService } from 'src/app/services/sigin.service';
import { IssueBookService } from '../issue-book.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-issue-new-books',
  templateUrl: './issue-new-books.component.html',
  styleUrls: ['./issue-new-books.component.css']
})
export class IssueNewBooksComponent implements OnInit {
  onClick: any;
  show: any;
  constructor(private services: SiginService, private servicess: FileUploadService, private elementRef: ElementRef,private servicesI:IssueBookService,private router:Router) {
    // console.log("This is ketan");

  }
  getAllBooksID:any
  getAllBooksData: any
  checkdata: any
  matchedData: any
  vishal: any
  allBooksdata: any
  IssueBookData:any
  data:any
  allreadyIssedBooks:any
  stdNames$: Observable<string[]> | undefined;
  ngOnInit() {

    this.services.GetIssueBooksDetails().subscribe((result)=>{
      this.IssueBookData=result.body
     // console.log(this.IssueBookData);

      this.IssueBookData.forEach((value: any, key: any) => {
        //console.log(value.isbn_number[0]);
        this.data=value
        this.allreadyIssedBooks =this.data.isbn_number[0]
          //console.log(this.allreadyIssedBooks);

        
        /*if (temp == value.SID) {
          // console.log("correct id");
          // const  marks = value.marks;
          this.matchedData = value
          this.show = true;
          //console.log(this.matchedData);
        } else {
          //console.log("incorrect id");
        }*/

      })



    })

    this.elementRef.nativeElement.querySelector('#StudentId').addEventListener('keyup', (event: KeyboardEvent) => {

    
      // Execute your logic here.
      const temp = (event.target as HTMLTextAreaElement).value
      this.services.GetUserDetails().subscribe((result) => {
        this.checkdata = result.body
        // this.checkdata=result.body
        // console.log(this.checkdata[0]);
        this.checkdata.forEach((value: any, key: any) => {
          // console.log( temp,value.SID,temp==value.SID);
          if (temp == value.SID) {
            // console.log("correct id");
            // const  marks = value.marks;
            this.matchedData = value
            this.show = true;
            //console.log(this.matchedData);
          } else {
            //console.log("incorrect id");
          }

        })
      })

    });
    this.elementRef.nativeElement.querySelector('#StudentId').addEventListener('keydown', (event: KeyboardEvent) => {
      // Check for allowed keys on keydown
      if (event.key === 'Delete' || event.key === 'Backspace') {
        this.reset()
        this.show = false;
        this.matchedData = null;
      }
    });
    this.elementRef.nativeElement.querySelector('#BookId').addEventListener('keyup', (event: KeyboardEvent) => {
      //alert("ketan")
          // Execute your logic here.
          const temp2=(event.target as HTMLTextAreaElement).value
          this.servicess.getAllBooksData().subscribe((result)=>{
            this.getAllBooksData=result
           // this.checkdata=result.body
           //console.log(this.getAllBooksData);
         this.getAllBooksData.forEach((value: any, key: any) => {
          //console.log(temp2==value.isbn_number);
           if(temp2==value.isbn_number){
           //console.log("correct id");
          const  marks2 = value.marks2;
           this.allBooksdata=value
           //console.log(this.allBooksdata);
           this.show = true;
  
           }else{
            //console.log("incorrect id");
           }
       
          })
      
          })
        })
        this.elementRef.nativeElement.querySelector('#BookId').addEventListener('keydown', (event: KeyboardEvent) => {
          // Check for allowed keys on keydown
          if (event.key === 'Delete' || event.key === 'Backspace') {
            this.reset()
            this.show = false;
            this.allBooksdata = null;
          }
        });
      }
  reactiveForm = new FormGroup({
    StudentId: new FormControl('', Validators.required),
    BookId: new FormControl('', Validators.required),
    ReturnDate:new FormControl('',Validators.required)
  })
  addIssueBooks() {
    //console.log(this.reactiveForm.value);
    //console.log(this.allBooksdata.isbn_number);
   if(this.reactiveForm.valid || this.reactiveForm.value.BookId===this.reactiveForm.value.BookId){
      //console.log("This is ketan");
      this.getAllBooksID=this.allBooksdata._id
      //console.log(this.getAllBooksID);
      this.reactiveForm.value.BookId=this.getAllBooksID
      /*if(this.IssueBookData.body.is){
      }*/
      //console.log(this.reactiveForm.value);
      this.services.GetIsssueBooks(this.reactiveForm.value).subscribe((result)=>{
        const data=this.router
        if(result.statusText==="OK"){
          Swal.fire({ text: result.statusText, icon: 'success'}).then(function (result) {data.navigate(['/issue-view-books'])})
        }else{
          Swal.fire({ text: "Error", icon: 'error'}).then(function (result) {data.navigate(['/tables'])})
        }
      })
    }
   }
  allData() {

  }
  reset() {
    this.reactiveForm.reset();
    this.show = false;
  }


}
    






  


