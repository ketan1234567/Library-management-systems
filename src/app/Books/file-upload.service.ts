import { HttpClient, HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, catchError, retry, tap, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  viewAuthor() {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:1010';
  public image: string | undefined;
  apiurl: any;
  constructor(private http:HttpClient, private sanitizer: DomSanitizer) { }
  upload(file: any,data:any): Observable<HttpEvent<any>> {
   const formData: FormData = new FormData();
   console.log(data);
   
     formData.append('file', file);
     
   formData.append('data', JSON.stringify(data));
    
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData ,{
      reportProgress: true,
      responseType: 'json'
    }); 
    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`,{responseType: 'blob' })
  }
  getAllData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allDataImages`)
  }
  deleteAllData(_id:any){
    let baseUrl = `${this.baseUrl}/delete`;
    return this.http.delete(baseUrl + "/" + _id, { observe: 'response', withCredentials: true }).pipe(
      catchError(this.handleError)
    )
  }
  GetEditBooks(id: any): Observable<any> {
    let api_url = `${this.baseUrl}/edit`;
    return this.http.get(api_url + "/" + id, { observe: 'response', withCredentials: true }).pipe(
      catchError(this.handleError)
    )
  }
  UpdatedBooks(data:any):Observable<any>{
    let api_url=`${this.baseUrl}/update`;
    return this.http.put(api_url+"/"+data.id,data,{observe:'response',withCredentials:true}).pipe(
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