import {Component} from '@angular/core';
import {AccountDbService} from '../account-db.service';

@Component({
  selector: 'app-total-save-up',
  templateUrl: './total-save-up.component.html',
  styleUrls: ['./total-save-up.component.css']
})
export class TotalSaveUpComponent {

  totalSaved: number;
  private service;

  constructor(db: AccountDbService) {
    this.service = db;
    this.updateTotalSaved();
  }


  updateTotalSaved() {
    this.totalSaved = this.service.getTotal();
  }
}
