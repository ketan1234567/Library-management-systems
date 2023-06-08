import { Injectable } from '@angular/core';
import { BooksService } from '../Books/books.service';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  apiurl = 'http://localhost:1010/author';
  constructor(private service:BooksService,private httpclient:HttpClient) { }

  addAuthor(data: any): Observable<any> {
    let api_url = `${this.apiurl}/create`;
    return this.httpclient.post(api_url, data, { observe: 'response', withCredentials: true }).pipe(
      catchError(this.handleError)
    )
  }
  viewAuthor(): Observable<any> {
    let api_url = `${this.apiurl}/get`;
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
