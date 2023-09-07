import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Subject, async, fromEvent, takeUntil } from 'rxjs';
import { SiginService } from 'src/app/services/sigin.service';
import {CommonModule} from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  viewData:any
  loader: any;
  editStatus:any
  editStatus_id:any
  editStatus1:any
  private unsubscriber : Subject<void> = new Subject<void>();
  constructor(private service:SiginService,private router:Router){


  }
   ngOnInit() {
    this.service.GetUserDetails().subscribe((result)=>{
      this.viewData=result.body
      console.log(this.viewData)
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



     reactiveForm=new FormGroup({
      id:new FormControl(),
      status:new FormControl('',Validators.required)
    })
   
     
 
    onEditUser(id:any){
      this.service.EditUserStatus(id).subscribe((result)=>{

        this.editStatus_id=result.body._id
       
        
        this.editStatus=result.body
        this.editStatus1=result.body.status=0
        console.log(this.editStatus);
        this.reactiveForm.setValue({id:this.editStatus_id,status:this.editStatus.status})
      })
    Swal.fire({
      title: 'Are you sure want to Block This Student ID?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Block This StudentID!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed===true) {
        this.service.UpdateStatus(this.reactiveForm.value).subscribe((result)=>{
          Swal.fire(
            'Blocked',
     
            'success'
          )
          this.ngOnInit();
        })
      } 
    })

  }
  onEditUserActive(id:any){

    this.service.EditUserStatus(id).subscribe((result)=>{
      this.editStatus_id=result.body._id
      this.editStatus=result.body
      this.editStatus1=result.body.status=1
      console.log(this.editStatus);
      this.reactiveForm.setValue({id:this.editStatus_id,status:this.editStatus.status})
    })
  Swal.fire({
    title: 'Are you sure you want to active this student?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, we want to active this student',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.isConfirmed===true) {
      this.service.UpdateStatus(this.reactiveForm.value).subscribe((result)=>{
        Swal.fire(
          'Actived!',
          'success'
        )
        this.ngOnInit();
      })
    } 
  })

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
