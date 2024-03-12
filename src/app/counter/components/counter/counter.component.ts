import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  private initialValue = 10;
  counter: number = this.initialValue;

  constructor(){}
  increaseBy(value: number){
    this.counter += value;
  }

  reset(){
    this.counter = this.initialValue;
  }
}
