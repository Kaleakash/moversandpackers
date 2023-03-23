import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{

  constructor(public gs:GlobalService,public router:Router){
    
  }
  ngOnInit(): void {
    this.gs.changeObservable("none");
    this.router.navigate(["/"])
  }
}
