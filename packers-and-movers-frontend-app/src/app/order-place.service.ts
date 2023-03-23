import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersPlace } from './orders-place';

@Injectable({
  providedIn: 'root'
})
export class OrderPlaceService {

  constructor(public http:HttpClient) { }

  placeOrder(order:any):Observable<any> {
    return this.http.post("http://localhost:3000/api/order/orderPlace",order);
  }

  findAllOrders():Observable<OrdersPlace[]> {
    return this.http.get<OrdersPlace[]>("http://localhost:3000/api/order/findAllOrders");
  }

  findAllCustomerByEmaildId(emailid:any):Observable<OrdersPlace[]> {
    return this.http.get<OrdersPlace[]>("http://localhost:3000/api/order/findOrderByCustomer/"+emailid);
  }
}
