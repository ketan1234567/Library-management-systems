import { Component, HostListener, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
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
  items: any;
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
   // Filtered array
   filteredItems: { id: number; name: string }[] = [];
  ngOnInit() {

    this.services.GetIssueBooksDetails().subscribe((result)=>{
      this.IssueBookData=result.body
     // console.log(this.IssueBookData);

      this.IssueBookData.forEach((value: any, key: any) => {
        //console.log(value.);
        //this.data=value
        //this.allreadyIssedBooks =this.data.isbn_number
        // console.log(this.allreadyIssedBooks);
         //console.log(this.allreadyIssedBooks[1]);


   

        
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


          //const STUDENT_id= this.checkdata.find( (STUDENT_id: { status: any }) => {return STUDENT_id.status==  temp})
          if (temp == value.SID) {
            // console.log("correct id");
            // const  marks = value.marks;
            this.matchedData = value
            this.show = true;
          //  console.log(this.matchedData);
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

      const temp2 = (event.target as HTMLTextAreaElement).value;

      this.servicess.getAllBooksData().subscribe((result) => {
        this.getAllBooksData = result;
      

      if (this.getAllBooksData !== undefined) {

        this.getAllBooksData.forEach((value: any, key: any) => {
          const book = this.IssueBookData.find((book: { isbn_number: any }) => {
            return book.isbn_number == temp2;
        });
    
        if (temp2 == value.isbn_number) {
          this.allBooksdata = value; // Assign the entire 'value' object to 'this.allBooksdata
                this.show = true;
          // Handle the case when the ISBN number matches 'temp2'.
      } else if (book !== undefined) {
        const main = book.isbn_number;
          if (!this.allBooksdata) {
            this.allBooksdata = {}; // Initialize it as an empty object if it's still null
        }
        this.allBooksdata.alread = [main];  // Assign the 'alread' property to 'this.allBooksdata'
        console.log(this.allBooksdata);
      } else {
        console.log("isbn_number not found" + temp2);
          // Handle the case when neither the ISBN number nor 'book' is found.
      }
          });
     } else {
        console.log("getAllBooksData is undefined.");
     }
    });

    })
  
        this.elementRef.nativeElement.querySelector('#BookId').addEventListener('keydown', (event: KeyboardEvent) => {
          // Check for allowed keys on keydown
          if ( event.key === 'Backspace') {
            console.log("Keydown");
            
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
    






  


