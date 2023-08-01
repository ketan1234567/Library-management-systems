import { Component, OnInit } from '@angular/core';
import { SiginService } from 'src/app/services/sigin.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  viewData:any
  constructor(private service:SiginService){}
  ngOnInit() {
    this.service.GetUserDetails().subscribe((result)=>{
      this.viewData=result.body
      console.log(this.viewData)
    })

  }


  onEditUser(id:any){

  }
  deleteuser(id:any){

  }

}
