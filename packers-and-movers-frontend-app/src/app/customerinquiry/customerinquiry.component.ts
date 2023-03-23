import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-customerinquiry',
  templateUrl: './customerinquiry.component.html',
  styleUrls: ['./customerinquiry.component.css']
})
export class CustomerinquiryComponent implements OnInit{
msg:string ="";
inqRef = new FormGroup({
  name : new FormControl(),
  email:new FormControl(),
  phonenumber:new FormControl(),
  subject:new FormControl(),
  message:new FormControl()
});
customer:any;
constructor(public ms:MessageService){

}
ngOnInit(): void {
      let obj = JSON.parse(sessionStorage.getItem("customer"));
      if(obj!=null){
        this.customer= obj;
      }
}
sendMessage(){
    console.log(this.customer);
    let newMessage:any = this.inqRef.value;
    newMessage.name = this.customer.fname;
    newMessage.email=this.customer.email;
    newMessage.phonenumber=this.customer.phonenumber;
    newMessage.typeofuser="Existing User";
    //console.log(newMessage);
    this.ms.storeMessage(newMessage).subscribe({
      next:(result:any)=> {
        this.msg="Our team will contact you as soon as possible";
      },
      error:(error:any)=> {

      },
      complete:()=> {
        console.log("Existing user send request")
      }
    })
    this.inqRef.reset();
}

}
