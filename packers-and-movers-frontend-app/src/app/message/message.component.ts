import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{

  messages:Array<Message>=[];
  constructor(public ms:MessageService){

  }
  ngOnInit(): void {
      
    this.ms.findAllMessage().subscribe({
      next:(result:any)=> {
        this.messages=result.data;
        console.log(result.data.length)
      },
      error:(error:any)=> {
        
      },
      complete:()=> {

      }
    
    })
  }
}
