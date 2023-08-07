import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, combineLatest, filter, forkJoin, map, of, scan, timer } from 'rxjs';
import { SiginService } from 'src/app/services/sigin.service';

@Component({
  selector: 'app-issue-new-books',
  templateUrl: './issue-new-books.component.html',
  styleUrls: ['./issue-new-books.component.css']
})
export class IssueNewBooksComponent implements OnInit {
  constructor(private services:SiginService){
    console.log("This is ketan");
    
  }
  checkdata:any
  matchedData:any
  vishal:any
  stdNames$: Observable<string[]> | undefined; 
  ngOnInit():void {
    this.services.GetUserDetails().subscribe((result)=>{
      //console.log(result.body);
    })
    addEventListener('keyup', (event: KeyboardEvent) => {
      // Execute your logic here.
      const temp=(event.target as HTMLTextAreaElement).value
      this.services.GetUserDetails().subscribe((result)=>{
        this.checkdata=result.body
       // this.checkdata=result.body
     // console.log(this.checkdata[0]);
      this.checkdata.forEach((value: any, key: any) => {
     // console.log( temp,value.SID,temp==value.SID);
       if(temp==value.SID){
       // console.log("correct id");
      // const  marks = value.marks;
       this.matchedData=value
       //console.log(this.matchedData);
       }else{
        //console.log("incorrect id");
       }
    
      })
    })






    });
    addEventListener('keydown', (event: KeyboardEvent) => {
      // Check for allowed keys on keydown
      if (event.key === 'Delete' || event.key === 'Backspace') {
         this.reset()
          this.matchedData=null;

 
      }
    });


  }

  reactiveForm=new FormGroup({
    StudentId:new FormControl('',Validators.required),
    isbnnumber:new FormControl('',Validators.required)
  })
  addIssueBooks(){}
allData(){
  
}



reset() {
  this.reactiveForm.reset();
}
onKeydown(event:any) { 

  if (event.key === "Enter") { console.log(event); }
  
  if (event.key === "Backspace") { console.log(event); } 
  
  if (event.key === "ArrowUp") { console.log(event); } 
  
  if (event.key === "ArrowDown") { console.log(event); } 
  
  }
  ngAfterViewInit() {
    document.addEventListener('click', (event) => {
  console.log();
  
    });
  }
  

  }
