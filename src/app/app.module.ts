import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TransactionListComponent } from './transaction/transaction-list.component';

/**
 * The main module for the app. Here we include all of the other modules
 * components and services that we'll need to build out the full app.
 */
@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
