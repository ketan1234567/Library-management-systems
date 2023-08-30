import { Component, OnInit } from '@angular/core';
import { Router,Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentRoute:any
  small:number=0;
  userDetails:any
  userData:any
  userRole:any
  big:number=260;
  ngOnInit(): void {

    

  }
  constructor(private router: Router) {

    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart ) {
            // Show progress spinner or progress bar
            console.log('Route change detected',this.userRole);
 
        }
        if (event instanceof NavigationEnd) {
            // Hide progress spinner or progress bar
            this.currentRoute = event.url;          
            console.log(this.currentRoute);
        }

        if (event instanceof NavigationError) {
             // Hide progress spinner or progress bar

            // Present error to user
            console.log(event.error);
        }
    });


    //console.log(this.userRole);
    

}


}