import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { SiginService } from 'src/app/services/sigin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-issue-view-books',
  templateUrl: './issue-view-books.component.html',
  styleUrls: ['./issue-view-books.component.css']
})
export class IssueViewBooksComponent implements OnInit {
  IssueBookData:any
  datePipeString : any
  datePipeString2:any
  message:any
  datePipeString3:any
  daysinPay:any
  Ruppes:any
  mainData:any
  PositiveNumber:any
  constructor(private services:SiginService,private datePipe: DatePipe){

  }
  ngOnInit(): void {
    this.services.GetIssueBooksDetails().subscribe((result)=>{
   //   console.log(result);
      this.IssueBookData=result.body
    //  console.log(this.IssueBookData);
      this.groupValidator()
    })

  
  }
  onEditUser(id:any){

  }
  deleteuser(id:any){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed===true) {
        this.services.deleteIssueBookDetails(id).subscribe((result)=>{
          console.log(result);
          
          Swal.fire(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          )
        })
      } 
    })

}

groupValidator() {

for (let i = 0; i < this.IssueBookData.length; i++) {
  console.log(this.IssueBookData[i]);

  //const fromCtrl = this.IssueBookData[0].createdAt | this.date: 'dd/MM/yyyy hh:mm a'
  this.datePipeString = this.datePipe.transform(this.IssueBookData[i].createdAt,'yyyy-MM-dd');
  this.datePipeString2 = this.datePipe.transform(this.IssueBookData[i].ReturnDate,'yyyy-MM-dd');
  this.datePipeString3 = this.datePipe.transform(Date.now(),'yyyy-MM-dd');
  
 //console.log(this.datePipeString2<this.datePipeString3);
  if(this.datePipeString2<this.datePipeString3){
 this.message="this pay for"
 console.log("this is due to pay");
  }else{
    console.log("This is error Coming");
  }


  const date1: Date = new Date(this.datePipeString2);
  const date2: Date = new Date(this.datePipeString3);

  const diffInMilliseconds: number = date2.getTime() - date1.getTime();
    const diffInDays: number = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
   // this.daysinPay=diffInDays


    const perpay=10
    this.IssueBookData[i].daysinPay=diffInDays //create proprty in object in Golba
    if(diffInDays>0){
      this.IssueBookData[i].Ruppes=diffInDays*perpay
      console.log(this.IssueBookData[i]);
      
    }else{
      this.IssueBookData[i].Ruppes=0
    }
  


 //   console.log('Difference in days:', this.Ruppes);


 
}
}


}
