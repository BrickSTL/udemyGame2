import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  number = 0;
  constructor() { }

  ngOnInit() {

  }

  onStart(){
    setInterval(() => {
      this.number++
    }, 1000);
  }

  onStop(){
    this.number=0;
  }
}
