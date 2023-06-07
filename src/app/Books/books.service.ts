import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  //http headers 
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  

  constructor(private httpclient:HttpClient) { }
  
  apiurl = 'http://localhost:1010/add/category';
  apiurlu='http://localhost:1010/add/category'
  apiurlus='http://localhost:1010/delete/category'

  apiurlur='http://localhost:1010/edit/category'
  apiurlud='http://localhost:1010/update/category'


  addCategory(data:any):Observable<any>{
    let api_url = `${this.apiurl}`;
    return this.httpclient.post(api_url, data, { observe: 'response', withCredentials: true }).pipe(
      catchError(this.handleError)
    )
  }
  
  viewCategory():Observable<any>{
    let api_url = `${this.apiurlu}`;
    return this.httpclient.get(api_url,  { observe: 'response', withCredentials: true }).pipe(
      catchError(this.handleError)
    )
  }
  deleteCategory(_id:any):Observable<any>{
    let api_url = `${this.apiurlus}`;
    return this.httpclient.delete(api_url+"/"+_id,{ observe: 'response', withCredentials: true }).pipe(
      catchError(this.handleError)
    )
  }
//Get Single Object Data in Table Manner

GetEditCategory(id:any):Observable<any>{
  let api_url=`${this.apiurlur}`;
  return this.httpclient.get(api_url+"/"+id,{ observe: 'response', withCredentials: true }).pipe(
    catchError(this.handleError)
  )
} 
//update category 
UpdatedCategory(data:any):Observable<any>{
  let api_url=`${this.apiurlud}`;
  return this,this.httpclient.put(api_url+"/"+data.id,data, {observe:'response',withCredentials:true}).pipe(
    catchError(this.handleError)
  )

}
/* 
GetEditCategory(id:any):Observable<any>{
  let api_url=`${this.apiurlur}/${id}`
  return this.httpclient.get(api_url,{headers:this.httpHeaders}).pipe(
    map((res:any)=>{
      return res || {};

  }),
  catchError(this.handleError)
  )
} */






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