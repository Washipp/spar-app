import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TotalSaveUpComponent } from './total-save-up/total-save-up.component';
import { AccountDbService } from './account-db.service';
import { SaveUpComponent } from './save-up/save-up.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalSaveUpComponent,
    SaveUpComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AccountDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
