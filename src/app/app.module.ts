import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TotalSaveUpComponent } from './total-save-up/total-save-up.component';
import {AccountDbService} from './account-db.service';
import { SaveUpComponent } from './save-up/save-up.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalSaveUpComponent,
    SaveUpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
