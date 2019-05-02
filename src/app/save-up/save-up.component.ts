import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-save-up',
  templateUrl: './save-up.component.html',
  styleUrls: ['./save-up.component.css']
})
export class SaveUpComponent {

  @Input('original_price1') original_price1: number;
  @Input('percent') percent: number;
  @Input('budget_price') budget_price: number;
  @Input('original_price2') original_price2: number;
  @Input('reduced_price') reduced_price: number;

  constructor() { }

  onClick() {
    console.log("test");
  }
}
