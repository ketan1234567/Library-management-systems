import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SignupService {

  apiurl='http://localhost:1010/signup-data/data'
  apiurl_1='http://localhost:1010/signup-data/data'
  //http headers 
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) {}

  LoginForm(data:any):Observable<any>{
    let api_url=`${this.apiurl}`;
    return this.httpClient
    .post(api_url,data,{observe: 'response', withCredentials: true})
    .pipe( catchError(this.handleError))
    
  }
  
  checkLoginData(data:any):Observable<any>{
    let api_url=`${this.apiurl_1}`;
    return this.httpClient
    .post(api_url,data,{observe: 'response', withCredentials: true})
    .pipe( catchError(this.handleError))
    
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
      console.log(errorMessage);
      return throwError(() => {
        errorMessage;
      });
    }



}
