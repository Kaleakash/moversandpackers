import { Injectable } from '@angular/core';
import {Observable,BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  obj = new BehaviorSubject<string>("none");
  mySub = this.obj.asObservable();
  constructor() { }

  getObservable() {
    return this.mySub;
  }
  changeObservable(msg:any){
    this.obj.next(msg);
  }

}
