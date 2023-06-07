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
  editvategoryvalue:any
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
   //console.log(result)
     this.editCategory=result.body._id
    this.editvategoryvalue=result.body
    //this.editCategory=result.body.value
  //console.log(this.editvategoryvalue)
   this.reactiveForm.setValue({id:this.editCategory,category:this.editvategoryvalue.category,active:this.editvategoryvalue.active})
  
    })

  }

  onSubmit(){

    console.log("in on submit",this.reactiveForm.value)

  }
  UpdatecategoryForm(){
    console.log("in update form",this.reactiveForm.value)


     this.services.UpdatedCategory(this.reactiveForm.value).subscribe((result)=>{

      if(result.statusText==="OK"){
        Swal.fire({ text: "Updated Successfully", icon: 'success'}).then(

        )
 
      }else{
        Swal.fire({ text: "Error", icon: 'error'})
      }
  


      console.log(result,"In result")
    }) 
  }


}
