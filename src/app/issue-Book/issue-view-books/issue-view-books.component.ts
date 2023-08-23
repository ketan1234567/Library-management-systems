import { Component, OnInit } from '@angular/core';
import { SiginService } from 'src/app/services/sigin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-issue-view-books',
  templateUrl: './issue-view-books.component.html',
  styleUrls: ['./issue-view-books.component.css']
})
export class IssueViewBooksComponent implements OnInit {
  IssueBookData:any
  constructor(private services:SiginService){

  }
  ngOnInit(): void {
    this.services.GetIssueBooksDetails().subscribe((result)=>{
      console.log(result);
      this.IssueBookData=result.body
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
}
