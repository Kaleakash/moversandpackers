import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{
  allService:Array<Service>=[]
  constructor(public ss:ServiceService,
    public router:Router){

  }
  ngOnInit(){
      this.viewService();
  }
  viewService() {
    this.ss.findAllService().subscribe({
      next:(result:any)=> {
        console.log(result);
        this.allService=result.data;
      },
      error:(error:any)=> {

      },
      complete:()=> {

      }
    })
  }
}
