import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderPlaceService } from '../order-place.service';
import { OrdersPlace } from '../orders-place';
import { QuoteInfo } from '../quote-info';
import { Service } from '../service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-customerrequest',
  templateUrl: './customerrequest.component.html',
  styleUrls: ['./customerrequest.component.css']
})
export class CustomerrequestComponent implements OnInit {

  
  service:Array<Service>=[];
  customer:any;
  constructor(public ser:ServiceService,public router:Router,
    public os:OrderPlaceService){

  }
  
  ngOnInit(): void {
    let obj  = JSON.parse(sessionStorage.getItem("customer"));
    if(obj!=null){
      this.customer= obj;
      console.log(this.customer)
    }
      this.ser.findAllService().subscribe({
        next:(result:any)=> {
            //console.log(result);
            this.service= result.data;
            console.log(this.service.length)
        },
        error:(error:any)=> {

        },
        complete:()=> {
            console.log("All Service data loaded successfully")
        }
      })
  }
  temp:boolean = false;
  filterService:Service;
  selectOption(selTemp:any){
    this.temp = true;
    let selectOption = selTemp.value;
    console.log(selectOption)
    let filterService = this.service.filter(s=>s.title==selectOption);
    this.filterService = filterService[0];
  }
  quoteInfo:Array<QuoteInfo>=[];
  totalPrice:number =0;
  calculate(itemName:any,itemQuanity,index:any){
      // console.log(this.filterService)
      // console.log(itemName+" "+itemQuanity+" "+index)
      // console.log(this.filterService.items[index]?.price)
      // console.log((itemQuanity*this.filterService.items[index]?.price))
      let quoteInfo = new QuoteInfo(this.filterService.title,itemName,this.filterService.items[index]?.price,itemQuanity,itemQuanity*this.filterService.items[index]?.price)
      this.quoteInfo.push(quoteInfo);
      console.log(this.quoteInfo.length)
      this.totalPrice = this.totalPrice+ itemQuanity*this.filterService.items[index]?.price 
      console.log(this.totalPrice)
    }
    finalQuote:boolean=false;
    customerReqRef = new FormGroup({
      movingFrom:new FormControl(),
      movingTo:new FormControl(),
      movingDate:new FormControl()
    })
    submitRequest(){
      let customerReqForm = this.customerReqRef.value;
      console.log(customerReqForm)
      console.log(this.quoteInfo.length);
      this.finalQuote=true;
    }

    cancel() {
        this.router.navigate(["/customerhome"])
    }

    processed(){
      let cutomerServiceReq = this.customerReqRef.value;
      let orderPlace=new OrdersPlace(this.customer.fname,this.customer.email,this.customer.phonenumber,
        cutomerServiceReq.movingFrom,cutomerServiceReq.movingTo,
        cutomerServiceReq.movingTo,this.quoteInfo)

        console.log(orderPlace);
        this.os.placeOrder(orderPlace).subscribe({
          next:(result:any)=> {
            console.log(result.message);
            alert(result.message)
            this.router.navigate(["/customerhome"])
          },
          error:(error:any)=> {
            console.log(error)
          },
          complete:()=> {
            console.log("done")
          }
          
        })
      }
}
