import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() numberFired = new EventEmitter<number>();
  number;
  lastNumber = 0;
  constructor() { }

  ngOnInit() {

  }

  onStart(){
    this.number = setInterval(() => {
      this.numberFired.emit(this.lastNumber +1);
      this.lastNumber++;
    }, 1000);
  }

  onStop(){
    clearInterval(this.number)
  }
}
