import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, combineLatest, filter, forkJoin, map, of, scan, timer } from 'rxjs';
import { SiginService } from 'src/app/services/sigin.service';

@Component({
  selector: 'app-issue-new-books',
  templateUrl: './issue-new-books.component.html',
  styleUrls: ['./issue-new-books.component.css']
})
export class IssueNewBooksComponent implements OnInit {
  constructor(private services:SiginService){}
  checkdata:any
  stdNames$: Observable<string[]> | undefined; 
  ngOnInit():void {
    this.services.GetUserDetails().subscribe((result)=>{
      //console.log(result.body);
      
    })

  }


  reactiveForm=new FormGroup({
    StudentId:new FormControl('',Validators.required),
    isbnnumber:new FormControl('',Validators.required)

  })
  addIssueBooks(){}
allData(){
  
}
  onKeyUp(event:Event):void{
    const data=(event.target as HTMLTextAreaElement).value
    //console.log(data);
    this.services.GetUserDetails().pipe(
      map((data)=>console.log(data.body[0]),
      
      )
    ).subscribe((result)=>{
      console.log(result);
     // this.checkdata=result.body
      //console.log(this.checkdata);
       
      
    })
    
  }

  
}
