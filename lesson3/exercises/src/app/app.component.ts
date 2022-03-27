import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  handleTakeOff(){
    let result=window.confirm('Confirm that the shuttle is ready for takeoff!');
    if(result){
      this.message="Shuttle in flight.";
      this.color='blue';
      this.height+=10000;
    }
  }
  handleLanding(){
   window.alert('The shuttle is landing. Landing gear engaged!');
  this.color="green";
  this.message="The shuttle has landed";
  this.height=0;
  }
  handleAbort(){
    let confirm=window.confirm('Are you sure you want to abort the mission?');
    if(confirm){
      this.message="Mission aborted";
      this.color="red";
      this.height=0;
    }
  }
  moveRocket(rocketImage, direction){
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    } else if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width= this.width - 10000;
    } else if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    } else {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    this.gutterCheck(this.width, this.height);
  }

  }

