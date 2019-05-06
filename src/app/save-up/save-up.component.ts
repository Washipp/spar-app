import {Component} from '@angular/core';
import {SavedAmount} from '../saved-amount';

@Component({
  selector: 'app-save-up',
  templateUrl: './save-up.component.html',
  styleUrls: ['./save-up.component.css']
})
export class SaveUpComponent {

  model = new SavedAmount();

  constructor() { }

  onSubmit() {
    console.log(this.model);
  }
}
