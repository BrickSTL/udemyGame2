import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  number = [{int:0}];
  constructor() { }

  ngOnInit() {

  }

  onStart(start: {int:0}){
    setInterval()
  }

  onStop(){

  }
}
