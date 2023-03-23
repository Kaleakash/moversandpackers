import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit{

  customer:any;
  constructor(public cs:CustomerService){

  }
  ngOnInit(): void {
    let login:any;
      let obj = JSON.parse(sessionStorage.getItem("user"));
      if(obj!=null){
        login= obj;
      }
      this.cs.findCustomerByEmailId(login.email).subscribe({
        next:(result:any)=> {
            //console.log(result.data);
            this.customer = result.data;
            sessionStorage.setItem("customer",JSON.stringify(result.data));
        },
        error:(error:any)=> {
            console.log(error)
        },
        complete:()=> {
            console.log("Find customer details")
        }
      })
  }
}
