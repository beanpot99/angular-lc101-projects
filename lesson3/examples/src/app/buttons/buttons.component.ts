import { getLocaleDateFormat } from '@angular/common';
import { StaticSymbolResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons";
   inactive:boolean[]=[true,true,true];
   active: boolean=true;
   frustrate: boolean=false;
   location: string='center';
   constructor() { }

   ngOnInit() { }
changeButtons(array){
for(let i=0;i<array.length;i++){
   array[i]=true;
}
}
shiftLocation(oldLocation:string){
   while(this.location===oldLocation){
      this.location=['left','right','center'][Math.floor(Math.random()*3)];
   }
   return this.location;
}
}
