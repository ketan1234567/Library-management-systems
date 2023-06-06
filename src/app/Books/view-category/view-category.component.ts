import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  userdata:any
  editCategory:any
  processValidation:any
  constructor(private services:BooksService){}

  ngOnInit() {
    this.services.viewCategory().subscribe((result)=>{
    this.userdata=result.body
    //console.log(this.userdata)
    })

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

  reactiveForm=new FormGroup({
    id:new FormControl(''),
    category: new FormControl('',Validators.required),
    active: new FormControl('',Validators.required)

  })
  onEditUser(id:any){
    this.services.GetEditCategory(id).subscribe((result)=>{
   console.log(result)
     //this.editCategory=result.body.value

    //this.editCategory=result.body.value
   //  console.log(this.editCategory)
     //this.reactiveForm.setValue({id:this.editCategory,category:this.result.category,active:this.editCategory.active})
    })

  }
  UpdatecategoryForm(){

  }

}
