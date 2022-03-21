import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title:"Yesterday's Chores",tasks:['Empty dishwasher', 'Make the bed']},
      {title:"Today's Chores",tasks:['Clean the bathroom','Do the dishes']},
      {title:"Tomorrow's chores",tasks:['Scoop the litterbox','Pick up dog poop']}
   ]
   constructor() { }

   ngOnInit() {
   }

}
