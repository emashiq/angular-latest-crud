import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, filter, switchMap } from 'rxjs/operators';
@Injectable()
export class HttpService {
  hostUrl:string="myApiUrl";
  httpOptions:any;
  constructor(private http:HttpClient) { }
  get(data:any,url:string):Observable<any>{
    return this.http.get('',data).pipe(map(x=>x));
  }
  put(formData:any,url:string){
    return this.http.put('',formData).pipe(map(x=>x));
  }
  putWithFile(formData:any,url:string){
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data'
      })
    }
    return this.http.put('',formData,this.httpOptions).pipe(map(x=>x));
  }
  post(formData:any,url:string):Observable<any>{
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post('',formData,this.httpOptions).pipe(map(x=>x));
  }
  postWithFile(formData:any,url:string):Observable<any>{
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data'
      })
    }
    return this.http.post('url',formData,this.httpOptions).pipe(map(x=>x));
  }
}
