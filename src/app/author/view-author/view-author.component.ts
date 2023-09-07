import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.css']
})
export class ViewAuthorComponent implements OnInit   {
  userdata:any
  processValidation:any
  editAuthorId:any
  editAuthorAllData:any
  ngOnInit(): void {
    this.service.viewAuthor().subscribe((result)=>{
      //    console.log(result)
      this.userdata=result.body

    })
   
  }
  constructor(private service:AuthorService){}
  onEditUser(id:any){
    this.service.editAuthor(id).subscribe((result)=>{
     //console.log(result)
    this.editAuthorId=result.body
    this.editAuthorAllData=result.body
    this.reactiveForm.setValue({id:this.editAuthorId._id,author:this.editAuthorAllData.author})
  })
//console.log(this.reactiveForm.value);

  
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
        this.service.deleteAuthor(id).subscribe((result)=>{
          Swal.fire(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          )
          this.ngOnInit();
        })
      } 
    })

  }

  reactiveForm=new FormGroup({
    id:new FormControl(),
    author:new FormControl('',Validators.required)
  })
  onSubmit(){

  }
  UpdateAuthor(){
this.service.UpdatedAuthor(this.reactiveForm.value).subscribe((result)=>{
  if(result.statusText==="OK"){
    Swal.fire({ text: "Updated Successfully", icon: 'success'}).then(
    )
    this.ngOnInit();

  }else{
    Swal.fire({ text: "Error", icon: 'error'})
  }
  console.log(result,"In result")

})
  }

}
