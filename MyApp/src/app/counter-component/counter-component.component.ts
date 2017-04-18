import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <button (click)="decrementCounter()"></button>
    {{counterValue}}
    <button (click)="incrementCounter()"></button>
  `
})
export class CounterComponentComponent implements OnInit {

  @Input() counterValue: number;
  constructor() { }


  ngOnInit() {
  }

  incrementCounter() {
    this.counterValue = this.counterValue - 1 + 2;
  }

  decrementCounter() {
    this.counterValue = this.counterValue - 1;

  }
}
