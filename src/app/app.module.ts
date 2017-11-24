import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { TransactionListComponent } from './transaction/transaction-list.component';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

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
    BrowserModule,
    rootRouting,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
