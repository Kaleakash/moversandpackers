import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent {

  serviceRef = new FormGroup({
    title:new FormControl(),
    description:new FormControl(),
    filePath:new FormControl()
  })
  constructor(public ss:ServiceService,
    public router:Router){

  }
  msg:string ="";
  storeService() {
    let service = this.serviceRef.value;

    //console.log(service);
    this.ss.addService(service).subscribe({
      next:(result:any)=> console.log(result),
      error:(error:any)=>console.log(error),
      complete:()=> {
        console.log("store sevice info")
      }
    })
    this.serviceRef.reset();
  }

}
