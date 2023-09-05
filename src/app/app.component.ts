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
  ngOnInit() {
   
if(this.userRole===1){

}else{
  this.anil()
}
  

  }
  constructor(private router: Router) {


    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
            // Show progress spinner or progress bar
           // console.log('Route change detected');

   

 
        }
        if (event instanceof NavigationEnd) {

   
            // Hide progress spinner or progress bar
            this.currentRoute = event.url;    
    
        
           
        }

        if (event instanceof NavigationError) {
             // Hide progress spinner or progress bar

            // Present error to user
            //console.log(event.error);
        }else{
        //  console.log("This is error");
          
         
        }
    });

    //console.log(this.userRole);
    

}

vishal(){
  this.userDetails = atob(document.cookie.split('.')[1]);
  this.userData=JSON.parse(this.userDetails).fullname;
  this.userRole=JSON.parse(this.userDetails).role;

}
anil(){
  //console.log("router navigate");
  
  this.router.navigateByUrl('/sign-in');

}






}



