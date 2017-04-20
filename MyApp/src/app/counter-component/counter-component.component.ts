import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <button (click)="decrementCounter()">-</button>
    {{counterValue}}
    <button (click)="incrementCounter()">+</button>
  `
})
export class CounterComponentComponent implements OnInit {
  @Input() counter: number;
  counterValue = 0;
  @Output() counterChange = new EventEmitter();

  constructor() {
  }


  ngOnInit() {
    if (this.counter !== 0) {
      this.counterValue = this.counter;
    }
  }

  incrementCounter() {
    this.counterValue = this.counterValue - 1 + 2;
    this.counterChange.emit(this.counterValue);
  }

  decrementCounter() {
    this.counterValue = this.counterValue - 1;
    this.counterChange.emit(this.counterValue);

  }
}
