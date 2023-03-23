import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quickquotebyuser',
  templateUrl: './quickquotebyuser.component.html',
  styleUrls: ['./quickquotebyuser.component.css']
})
export class QuickquotebyuserComponent implements OnInit{

  customer:any;
  ngOnInit(): void {
      let obj = JSON.parse(sessionStorage.getItem("customer"));
      if(obj!=null){
          this.customer= obj;
      }
  }
msg:string;
quickQuoteRef=new FormGroup({
  fullname:new FormControl(),
  email:new FormControl(),
  phoneNumber:new FormControl(),
  movingFrom:new FormControl(),
  movingTo:new FormControl(),
  movingDate:new FormControl(),
  message:new FormControl()
})
constructor(public qs:QuoteService){}
sendQuotation() {
  let quoteInfo:any = this.quickQuoteRef.value;
  quoteInfo.fullname=this.customer.fname+" "+this.customer.lname;
  quoteInfo.typeofuser=this.customer.typeofuser;
  quoteInfo.email= this.customer.email;
  quoteInfo.phoneNumber=this.customer.phonenumber;
  //quoteInfo.typeofuser="Guest";
  console.log(quoteInfo);
  console.log(this.customer);
  // this.qs.storeQuoteInformaiton(quoteInfo).subscribe({
  //   next:(result:any)=> {
  //       this.msg= result.message;
  //   },
  //   error:(error:any)=> {

  //   },
  //   complete:()=> {
  //     console.log("quote information stored")
  //   }
  // })
  this.quickQuoteRef.reset();
}
}
