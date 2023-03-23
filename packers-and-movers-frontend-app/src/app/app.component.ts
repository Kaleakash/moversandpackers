import { Component } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'packers-and-movers-frontend-app';

  menu:number =1;
  constructor(public gs:GlobalService){
    //console.log(this.menu=='main')
    this.gs.getObservable().subscribe({
      next:(result)=> {
        if(result=="admin"){
          this.menu = 2;
        }else if(result=="customer"){
          this.menu =3;
        }else {
          this.menu = 1;
        }
      }
    })
}
}
