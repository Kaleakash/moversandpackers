import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { }


  signUp(customer:any):Observable<any> {
    return this.http.post("http://localhost:3000/api/customer/create",customer);
  }

  signIn(customer:any):Observable<any> {
    return this.http.post("http://localhost:3000/api/customer/login",customer);
  }

  findCustomerByEmailId(customerEmail:any):Observable<any> {
    return this.http.get("http://localhost:3000/api/customer/findCustomerByEmail/"+customerEmail);
  }
}
