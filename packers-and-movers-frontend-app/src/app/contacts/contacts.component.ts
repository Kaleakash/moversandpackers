import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  msg:string ="";
  msgRef = new FormGroup({
    name : new FormControl(),
    email:new FormControl(),
    phonenumber:new FormControl(),
    subject:new FormControl(),
    message:new FormControl()
  })
  constructor(public ms:MessageService){

  } 

  sendMessage(){
    let message:any = this.msgRef.value;
    message.typeofuser="Guest"; 
    console.log(message);
      this.ms.storeMessage(message).subscribe({
        next:(result:any)=> {
            //console.log(result)
            this.msg="Our team will contact you as soon as possible";
        },
        error:(error:any)=> {
            console.log(error)
        },
        complete:()=> {
            console.log("message store by guest user")
        }
      })

  this.msgRef.reset();
   }
}
