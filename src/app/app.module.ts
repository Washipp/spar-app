import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TotalSaveUpComponent} from './total-save-up/total-save-up.component';
import {AccountDbService} from './account-db.service';
import {SaveUpComponent} from './save-up/save-up.component';
import {FormsModule} from '@angular/forms';
import {NavigationComponent} from './navigation/navigation.component';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {RouterModule} from '@angular/router';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    TotalSaveUpComponent,
    SaveUpComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CurrencyMaskModule,
    RouterModule.forRoot([
      {path: '', component: TotalSaveUpComponent},
      {path: 'home', component: TotalSaveUpComponent},
      {path: 'save', component: SaveUpComponent},
      {path: '**', component: TotalSaveUpComponent}
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [AccountDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
