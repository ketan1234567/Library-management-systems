import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SiginService } from '../services/sigin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userDetails:any
  userData:any
  userRole:any

  constructor(private service:SiginService) { }

  ngOnInit() {
    this.UserDetails()
    //console.log("Header Component here ");
    
   
  }
  UserDetails(){
        
    this.userDetails = atob(document.cookie.split('.')[1]);
   this.userData=JSON.parse(this.userDetails).fullname;
   this.userRole=JSON.parse(this.userDetails).role;
    console.log(this.userRole);
    

  }

}
