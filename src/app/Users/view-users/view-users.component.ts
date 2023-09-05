import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { async } from 'rxjs';
import { SiginService } from 'src/app/services/sigin.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  viewData:any
  loader: any;
  constructor(private service:SiginService,private router:Router){


  }
  async ngOnInit() {
    this.service.GetUserDetails().subscribe((result)=>{
      this.viewData=result.body
      //console.log(this.viewData)
    })

    try {
      await this.go(['/dashboard/user', '123'], { queryParams: { filter: 'active' } }, true);
      console.log('Navigation successful');
    } catch (error) {
      console.error('Navigation failed:', error);
    }

  }


  onEditUser(id:any){

  }
  deleteuser(id:any){

  }
  callMethodWithParameter(param: string) {

    console.log(`Method called with parameter: ${param}`);
  }

    async go(path:any, options: NavigationExtras = {}, showLoader: boolean = true):Promise<any> {
      if(showLoader === true) {
        //await this.loader.start();
        console.log("This is true");
        
      }
      this.router.navigate((['/sign-in']), { replaceUrl: false, ...options});
    }




}
