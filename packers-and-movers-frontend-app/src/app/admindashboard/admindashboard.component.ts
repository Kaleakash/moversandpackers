import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit{

  login:any;
  constructor(){

  }
  ngOnInit(): void {
      let obj = JSON.parse(sessionStorage.getItem("user"));
      if(obj!=null){
        this.login= obj;
      }
      console.log(this.login)
  }
}
