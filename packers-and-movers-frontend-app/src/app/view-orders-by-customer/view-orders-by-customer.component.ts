import { Component, OnInit } from '@angular/core';
import { OrderPlaceService } from '../order-place.service';
import { OrdersPlace } from '../orders-place';

@Component({
  selector: 'app-view-orders-by-customer',
  templateUrl: './view-orders-by-customer.component.html',
  styleUrls: ['./view-orders-by-customer.component.css']
})
export class ViewOrdersByCustomerComponent implements OnInit{

  customer:any;
  orders:Array<OrdersPlace>=[];
  constructor(public os:OrderPlaceService){

  }
  ngOnInit(): void {
    let obj = JSON.parse(sessionStorage.getItem("customer"));
    if(obj!=null){
      this.customer= obj;
    }
    console.log(this.customer)
    this.os.findAllCustomerByEmaildId(this.customer.email).subscribe({
      next:(result:any)=> {
        console.log(result.data)
        this.orders=result.data;
      }
    })
  }
}
