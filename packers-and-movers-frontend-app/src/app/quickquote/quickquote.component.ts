import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Quote } from '../quote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quickquote',
  templateUrl: './quickquote.component.html',
  styleUrls: ['./quickquote.component.css']
})
export class QuickquoteComponent {
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
  quoteInfo.typeofuser="Guest";
  console.log(quoteInfo);
  this.qs.storeQuoteInformaiton(quoteInfo).subscribe({
    next:(result:any)=> {
        this.msg= result.message;
    },
    error:(error:any)=> {

    },
    complete:()=> {
      console.log("quote information stored")
    }
  })
  this.quickQuoteRef.reset();
}
}
