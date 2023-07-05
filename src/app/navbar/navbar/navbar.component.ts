import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit() {
    this.AdminDetails()
    this.UserDetails()
  }
  userDetails:any
  userData:any
  SignupDetails:any;
  UserShow:any;
  adminDetails:any
  userDataAdmin:any
  userRole:any;
  adminRole:any
  constructor(private router:Router){}
  logout() {
    this.delete_cookie("token");
    Swal.fire({
      title: "Logout Successfull",
      icon: "success",
      confirmButtonText: "Ok",
    }).then(() => {
      this.router.navigate(['/sign-in'])
    })
  }
  delete_cookie(name: any) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
  AdminDetails (){
    
    
    this.adminDetails = atob(document.cookie.split('.')[1]);
   this.userDataAdmin=JSON.parse(this.adminDetails).email;
   this.adminRole=JSON.parse(this.adminDetails).role;
  //console.log(this.userDataAdmin);
  
  }
  UserDetails(){
        
    this.userDetails = atob(document.cookie.split('.')[1]);
   this.userData=JSON.parse(this.userDetails).fullname;
   this.userRole=JSON.parse(this.userDetails).role;
    console.log(this.userData);
    

  }

}
