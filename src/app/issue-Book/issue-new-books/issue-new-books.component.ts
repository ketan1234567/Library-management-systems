import { Component, HostListener, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, combineLatest, filter, forkJoin, map, of, scan, timer } from 'rxjs';
import { FileUploadService } from 'src/app/Books/file-upload.service';
import { SiginService } from 'src/app/services/sigin.service';
import { IssueBookService } from '../issue-book.service';


@Component({
  selector: 'app-issue-new-books',
  templateUrl: './issue-new-books.component.html',
  styleUrls: ['./issue-new-books.component.css']
})
export class IssueNewBooksComponent implements OnInit {
  onClick: any;
  show: any;
  constructor(private services: SiginService, private servicess: FileUploadService, private elementRef: ElementRef,private servicesI:IssueBookService) {
    // console.log("This is ketan");

  }

  getAllBooksData: any
  checkdata: any
  matchedData: any
  vishal: any
  allBooksdata: any
  stdNames$: Observable<string[]> | undefined;
  ngOnInit(): void {

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
  

    this.elementRef.nativeElement.querySelector('#isbnnumber').addEventListener('keyup', (event: KeyboardEvent) => {
      //alert("ketan")
          // Execute your logic here.
          const temp2=(event.target as HTMLTextAreaElement).value
          this.servicess.getAllBooksData().subscribe((result)=>{
            this.getAllBooksData=result
           // this.checkdata=result.body
           console.log(this.getAllBooksData);
           
      
         this.getAllBooksData.forEach((value: any, key: any) => {
          //console.log(temp2==value.isbn_number);
           if(temp2==value.isbn_number){
           // console.log("correct id");
          const  marks2 = value.marks2;
           this.allBooksdata=value
           this.show = true;
          console.log(this.allBooksdata);
           }else{
            //console.log("incorrect id");
           }
          })
      
          })
        })


      }
  

  reactiveForm = new FormGroup({
    StudentId: new FormControl('', Validators.required),
    isbnnumber: new FormControl('', Validators.required)
  })
  addIssueBooks() {
 
    if(this.reactiveForm.valid){
    
      
    }
 
    
   }
  allData() {

  }

  

  reset() {
    this.reactiveForm.reset();
    this.show = false;
  }


}
    






  


