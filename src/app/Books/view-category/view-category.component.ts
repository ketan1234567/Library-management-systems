import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  userdata:any

  constructor(private services:BooksService){}

  ngOnInit() {
    this.services.viewCategory().subscribe((result)=>{
  this.userdata=result.body

  console.log(this.userdata)
    })

  }
  onEditUser(id:any){
    alert(id)
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
        this.services.deleteCategory(id).subscribe((result)=>{
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
