import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service'
import { OrderPlaceService } from '../order-place.service';
import {QuoteService} from '../quote.service';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-adminwelcome',
  templateUrl: './adminwelcome.component.html',
  styleUrls: ['./adminwelcome.component.css']
})
export class AdminwelcomeComponent implements OnInit{

  numberOfMsg:number=0;
  numberOfQuote:number = 0;
  numberOfService:number=0;
  numberOfOrders:number =0;
  constructor(public ms:MessageService,public qs:QuoteService,
    public ss:ServiceService,
    public os:OrderPlaceService){

  }
  ngOnInit(): void {
      this.ms.findAllMessage().subscribe({
        next:(result:any)=> {
          console.log(result)
          this.numberOfMsg=result.data.length;
        }
      })
      this.qs.findAllQouteInformation().subscribe({
        next:(result:any)=> {
          this.numberOfQuote=result.data.length
        }
      })
      this.ss.findAllService().subscribe({
        next:(result:any)=> {
          this.numberOfService=result.data.length;
        }
      })
      this.os.findAllOrders().subscribe({
        next:(result:any)=> {
//          console.log(result.data.length)
          this.numberOfOrders=result.data.length;
        }
      })
  }
}
