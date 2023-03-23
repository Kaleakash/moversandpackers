import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { GlobalService } from '../global.service';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
    typeofuser:new FormControl()
  });
  failureMsg:string=""
  constructor(public ls:LoginService,
    public cs:CustomerService, 
    public gs:GlobalService,
    public router:Router){}

  signIn(){
    let login = this.loginRef.value;
    if(login.typeofuser=="admin"){
        this.ls.signIn(login).subscribe({
          next:(result:any)=> {
            //console.log(result)
            if(result.message == "Succesfully login by Admin!"){
              sessionStorage.setItem("user",JSON.stringify(login));
                this.gs.changeObservable("admin");
                this.router.navigate(["adminhome"])
            }else {
              this.failureMsg="InValid emailid or password";
            }
          },
          error:(error:any)=> {
            console.log(error)
          },
          complete:()=>{
            console.log("admin done login!")
          }
        })
    }else if(login.typeofuser=="customer"){
      this.cs.signIn(login).subscribe({
        next:(result:any)=> {
          //console.log(result)
          if(result.message == "Succesfully login by Customer!"){
            sessionStorage.setItem("user",JSON.stringify(login));
            this.gs.changeObservable("customer");
              this.router.navigate(["customerhome"])
          }else {
            this.failureMsg="InValid emailid or password";
          }
        },
        error:(error:any)=> {
          console.log(error)
        },
        complete:()=>{
          console.log("student done login!")
        }
      })
    }else {

    }
  }
}
