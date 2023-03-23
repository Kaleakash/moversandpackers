import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from './quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(public http:HttpClient) { }

  storeQuoteInformaiton(quote:any):Observable<any> {
    return this.http.post("http://localhost:3000/api/quote/store",quote);
  }

  findAllQouteInformation():Observable<Quote[]> {
    return this.http.get<Quote[]>("http://localhost:3000/api/quote/findAllQuote")
  }
}

