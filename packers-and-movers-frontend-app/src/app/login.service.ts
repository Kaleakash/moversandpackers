import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }

  signIn(login:any):Observable<any>{
      return this.http.post("http://localhost:3000/api/admin/login",login);
  }
}
