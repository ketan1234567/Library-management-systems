import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Subject, async, fromEvent, takeUntil } from 'rxjs';
import { SiginService } from 'src/app/services/sigin.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  viewData:any
  loader: any;
  private unsubscriber : Subject<void> = new Subject<void>();
  constructor(private service:SiginService,private router:Router){


  }
   ngOnInit() {
    this.service.GetUserDetails().subscribe((result)=>{
      this.viewData=result.body
      //console.log(this.viewData)
    })


    history.pushState(null, '');

    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)
      
    ).subscribe((_) => {
      history.pushState(null, '');
      console.log("unsubscri");
    });

    /*try {
      await this.go(['/view-users'], {  }, true);
      console.log('Navigation successful');
    } catch (error) {
      console.error('Navigation failed:', error);
    }*/

  }


  onEditUser(id:any){

  }
  deleteuser(id:any){ 

  }
  callMethodWithParameter(param: string) {

    console.log(`Method called with parameter: ${param}`);
  }

    /*async go(path:any, options: NavigationExtras = {}, showLoader: boolean = true):Promise<any> {
      if(showLoader === true) {
        //await this.loader.start();
        console.log("This is true");
        
      }
      this.router.navigate(path, { replaceUrl: false, ...options});
      console.log("This is error coming");

    }*/




}
