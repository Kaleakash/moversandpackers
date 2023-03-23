import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit{

  quote:Array<Quote>=[];
  constructor(public qs:QuoteService){

  }
  ngOnInit(): void {
      
    this.qs.findAllQouteInformation().subscribe({
      next:(result:any)=> {
        this.quote=result.data;
        console.log(result.data.length)
      },
      error:(error:any)=> {
        
      },
      complete:()=> {

      }
    
    })
  }

}
