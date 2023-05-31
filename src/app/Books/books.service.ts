import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  

  constructor(private httpclient:HttpClient) { }
  
  apiurl = 'http://localhost:1010/add/category';


  addCategory(data:any):Observable<any>{
    let api_url = `${this.apiurl}`;
    return this.httpclient.post(api_url, data, { observe: 'response', withCredentials: true }).pipe(
      catchError(this.handleError)
    )
  }
  
  viewCategory():Observable<any>{
    let api_url = `${this.apiurl}`;
    return this.httpclient.get(api_url,  { observe: 'response', withCredentials: true }).pipe(
      catchError(this.handleError)
    )
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log();
    Swal.fire({ text: error.error.message, icon: 'error' })
    return throwError(() => {
      errorMessage;
    });
  }

}