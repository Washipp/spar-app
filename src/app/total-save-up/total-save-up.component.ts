import {AfterViewInit, Component, ElementRef, HostListener} from '@angular/core';
import {AccountDbService} from '../account-db.service';

@Component({
  selector: 'app-total-save-up',
  templateUrl: './total-save-up.component.html',
  styleUrls: ['./total-save-up.component.css']
})
export class TotalSaveUpComponent implements AfterViewInit {

  totalSaved: number;
  private service;

  constructor(db: AccountDbService, private elementRef: ElementRef) {
    this.service = db;
    this.updateTotalSaved();
  }


  updateTotalSaved() {
    console.log('Eventlistener Update');
    this.totalSaved = this.service.getTotal();
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('button').getElementById('app-save-up').addEventListener('storage', () => {
      this.updateTotalSaved();
    });
  }


  @HostListener('storage') onMouseOver() {
    this.updateTotalSaved();
  }
}
