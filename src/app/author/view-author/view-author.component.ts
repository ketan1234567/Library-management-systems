import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.css']
})
export class ViewAuthorComponent implements OnInit   {
  userdata:any
  ngOnInit(): void {
    this.service.viewAuthor().subscribe((result)=>{
      console.log(result)
      this.userdata=result.body

    })
   
  }
  constructor(private service:AuthorService){}
  onEditUser(id:any){

  }
  deleteuser(id:any){

  }

}
