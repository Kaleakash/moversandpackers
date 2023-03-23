import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  customerRef = new FormGroup({
    fname:new FormControl(),
    lname:new FormControl(),
    phonenumber:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    typeofuser:new FormControl()
  })
  msg:string="";
  constructor(public cs:CustomerService){

  }
  signUp() {
    this.customerRef.get("typeofuser")?.setValue("customer");
    let customer = this.customerRef.value;
    console.log(customer);

    this.cs.signUp(customer).subscribe({
      next:(result:any)=> {
            //console.log(result);
            this.msg=result.message;
      },
      error:(error:any)=> {
          console.log(error)
      },
      complete:()=> { 
          console.log("customer account created...")
      }
    })

  this.customerRef.reset();
  }
}
