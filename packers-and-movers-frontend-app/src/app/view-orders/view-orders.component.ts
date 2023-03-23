import { Component, OnInit } from '@angular/core';
import { OrderPlaceService } from '../order-place.service';
import { OrdersPlace } from '../orders-place';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit{

  orders:Array<OrdersPlace>=[];
  constructor(public os:OrderPlaceService){

  }
  ngOnInit(): void {
      this.os.findAllOrders().subscribe({
        next:(result:any)=> {
          this.orders=result.data
        }
      })
  }
}
