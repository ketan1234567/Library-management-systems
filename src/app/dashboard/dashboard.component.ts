import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

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
}
