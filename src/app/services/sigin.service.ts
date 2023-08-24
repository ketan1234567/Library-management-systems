import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SiginService {
  adminDetails: any
  userDataAdmin: any
  adminRole: any
  userDetails: any
  userData: any
  userRole: any

  constructor(private httpclient: HttpClient) { }

  apiurl = 'http://localhost:1010/signup-data/data'
  apiurl_1 = 'http://localhost:1010/login-data/login'
  apiurl_3 = 'http://localhost:1010'

  CheckLoginData(data: any): Observable<any> {
    let api_url = `${this.apiurl_1}`;
    return this.httpclient.post(api_url, data, { observe: 'response', withCredentials: true }).pipe(
      catchError(this.handleError)
    )
  }
  SignUp(data: any): Observable<any> {
    let api_url = `${this.apiurl}`;
    return this.httpclient.post(api_url, data, { observe: 'response', withCredentials: true }).pipe(
      catchError(this.handleError)
    )
  }

  GetUserDetails(): Observable<any> {
    let apiurl_2 = `${this.apiurl_3}/get`;
    return this.httpclient.get(apiurl_2, { observe: 'response', withCredentials: true }).pipe(
      catchError(this.handleError)
    )
  }


  GetIsssueBooks(data: any): Observable<any> {
    let apiurl_2 = `${this.apiurl_3}/create`;
    return this.httpclient.post(apiurl_2, data, { observe: 'response', withCredentials: true }).pipe(
      catchError(this.handleError)
    )
  }

  GetIssueBooksDetails(): Observable<any> {
    let apiurl_2 = `${this.apiurl_3}/issue`;
    return this.httpclient.get(apiurl_2, { observe: 'response', withCredentials: true }).pipe(
      catchError(this.handleError)
    )
  }
  deleteIssueBookDetails(id:any): Observable<any> {
    let apiurl_2 = `${this.apiurl_3}/delete2`;
    return this.httpclient.delete(apiurl_2 +"/"+id, { observe: 'response', withCredentials: true }).pipe(
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

  AdminDetails() {


    this.adminDetails = atob(document.cookie.split('.')[1]);
    this.userDataAdmin = JSON.parse(this.adminDetails).email;
    this.adminRole = JSON.parse(this.adminDetails).role;
    //console.log(this.userDataAdmin);

  }
  UserDetails() {

    this.userDetails = atob(document.cookie.split('.')[1]);
    this.userData = JSON.parse(this.userDetails).fullname;
    this.userRole = JSON.parse(this.userDetails).role;
    //console.log(this.userData);

  }

}
