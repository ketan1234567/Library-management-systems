import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, fromEvent, takeUntil } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDetails:any
  userData:any
  SignupDetails:any;
  UserShow:any;
  adminDetails:any
  userDataAdmin:any
  userRole:any;
  adminRole:any

  private unsubscriber : Subject<void> = new Subject<void>();
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.AdminDetails()
    this.UserDetails()

    
    history.pushState(null, '');

    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)
      
    ).subscribe((_) => {
      history.pushState(null, '');
      console.log("unsubscriber");
    });
  }
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
