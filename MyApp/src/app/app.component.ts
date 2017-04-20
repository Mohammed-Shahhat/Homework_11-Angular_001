import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter Example';
  componentCounterValue = 0;

  constructor() {
  }

  counterValueChanged(counterValue: number) {
    this.componentCounterValue = counterValue;
  }

}
