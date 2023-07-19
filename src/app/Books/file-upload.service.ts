import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, catchError, retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = 'http://localhost:1010';
  public image: string | undefined;
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
    return this.http.get(`${this.baseUrl}/`)
  }
}