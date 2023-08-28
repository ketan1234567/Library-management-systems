import { Injectable } from '@angular/core';
import { BooksService } from '../Category/BooksService';
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
  editAuthor(id:any){
    let api_url=`${this.apiurl}/edit`;
    return this.httpclient.get(api_url+"/"+id ,{observe:'response',withCredentials:true}).pipe(
      catchError(this.handleError)
    )
  }
  UpdatedAuthor(data:any):Observable<any>{
    let api_url=`${this.apiurl}/update`;
    return this.httpclient.put(api_url+"/"+data.id,data,{observe:'response',withCredentials:true}).pipe(
      catchError(this.handleError)
    )
  }
  deleteAuthor(id:any):Observable<any>{
    let api_url=`${this.apiurl}/delete`;
    return this.httpclient.delete(api_url+"/"+id,{observe:'response',withCredentials:true}).pipe(
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
