import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class BooksService implements OnInit {
  //http headers 
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 self = this;
  error: any;
  options: any
  constructor(private httpclient: HttpClient, private route: Router) {

    //let  Animatable = new  MyTimeDefinition(this.route)
    
  }

  // 
  ngOnInit() {
  }
  apiurl = 'http://localhost:1010/category';

  addCategory(data: any): Observable<any> {
    let api_url = `${this.apiurl}/create`;
    return this.httpclient.post(api_url, data, { observe: 'response', withCredentials: true }).pipe(
      catchError(this.handleError)
    );
  }

  viewCategory(): Observable<any> {
    let api_url = `${this.apiurl}/get`;
    return this.httpclient.get(api_url, { observe: 'response', withCredentials: true }).pipe(
      catchError(this.handleError)
    );
  }
  deleteCategory(_id: any): Observable<any> {


    let api_url = `${this.apiurl}/delete`;
    return this.httpclient.delete(api_url + "/" + _id, { observe: 'response', withCredentials: true }).pipe(
      catchError(this.handleError)
    );
  }
  //Get Single Object Data in Table Manner
  GetEditCategory(id: any): Observable<any> {
    let api_url = `${this.apiurl}/edit`;
    return this.httpclient.get(api_url + "/" + id, { observe: 'response', withCredentials: true }).pipe(
      catchError(this.handleError)
    );
  }
  //update category 
  UpdatedCategory(data: any): Observable<any> {
    let api_url = `${this.apiurl}/update`;
    return this, this.httpclient.put(api_url + "/" + data.id, data, { observe: 'response', withCredentials: true }).pipe(
      catchError(this.handleError)
    );
  }



  // Error
 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    let me = this;
    //let self = this.route
    let errorMessage2 = 'Please First Login';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
   // console.log(this.self);


    //console.log({ text:error.status, icon: 'error' });
    //console.log(data23);
    if (error.status == 401) {

      Swal.fire({ text: errorMessage2, icon: 'error' }).then((result) => {
        if (result.isConfirmed==true) {
          //that.navigate(['/sign-in'])
          window.location.href = "/sign-in";
        
        }
      });
      //
    } else {
      //data23.navigate(['/sign-in'])
    }
    return throwError(() => {
     //errorMessage2;
    });
  }

}





