import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) {

  }

  addService(service:any):Observable<any> {
    return this.http.post("http://localhost:3000/api/service/create",service);
  }

  findAllService():Observable<Service[]> {
    return this.http.get<Service[]>("http://localhost:3000/api/service/findAllService");
  }
}
