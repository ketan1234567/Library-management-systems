import { Component, OnInit } from '@angular/core';
import { SiginService } from 'src/app/services/sigin.service';

@Component({
  selector: 'app-issue-view-books',
  templateUrl: './issue-view-books.component.html',
  styleUrls: ['./issue-view-books.component.css']
})
export class IssueViewBooksComponent implements OnInit {
  IssueBookData:any
  constructor(private services:SiginService){

  }
  ngOnInit(): void {
    this.services.GetIssueBooksDetails().subscribe((result)=>{
      console.log(result);
      this.IssueBookData=result.body
    })

  
  }
  onEditUser(id:any){

  }
  deleteuser(id:any){
    alert(id);

  }

}
