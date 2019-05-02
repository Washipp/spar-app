import {Component} from '@angular/core';
import {SavedAmount} from '../saved-amount';

@Component({
  selector: 'app-save-up',
  templateUrl: './save-up.component.html',
  styleUrls: ['./save-up.component.css']
})
export class SaveUpComponent {

  model = new SavedAmount(0, 0, 0, 0);

  constructor() { }

  onSubmit(element) {
    console.log(this.model);
  }
}
