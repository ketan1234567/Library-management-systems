import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-issue-new-books',
  templateUrl: './issue-new-books.component.html',
  styleUrls: ['./issue-new-books.component.css']
})
export class IssueNewBooksComponent implements OnInit {
  ngOnInit(): void {
    
  }

  reactiveForm=new FormGroup({
    StudentId:new FormControl('',Validators.required),
    isbnnumber:new FormControl('',Validators.required)

  })
  addIssueBooks(){
 console.log(this.reactiveForm.value);
  }
  changeColor(event: Event){
    console.log(event.target);
  }
}
