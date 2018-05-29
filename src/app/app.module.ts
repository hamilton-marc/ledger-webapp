import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { TransactionModule } from './transaction/transaction.module';
import { ContactModule } from './contact/contact.module';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
], { useHash: false });

/**
 * The main module for the app. Here we include all of the other modules
 * components and services that we'll need to build out the full app.
 */
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    rootRouting,
    HomeModule,
    TransactionModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
