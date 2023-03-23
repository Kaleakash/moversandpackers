import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(public http:HttpClient) { }

  storeMessage(message:any):Observable<any> {
    return this.http.post("http://localhost:3000/api/message/store",message);
  }

  findAllMessage():Observable<Message[]> {
    return this.http.get<Message[]>("http://localhost:3000/api/message/findAllMessage");
  }
}
