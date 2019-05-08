import {Component} from '@angular/core';
import {SavedAmount} from '../saved-amount';
import {AccountDbService} from '../account-db.service';

@Component({
  selector: 'app-save-up',
  templateUrl: './save-up.component.html',
  styleUrls: ['./save-up.component.css']
})
export class SaveUpComponent {

  model = new SavedAmount();
  service;

  constructor(db: AccountDbService) {
    this.service = db;
  }

  onSubmit() {
    this.service.setTotal(this.model.getSavedAmount());
  }
}
