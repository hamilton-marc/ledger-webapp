import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TransactionListComponent } from './transaction-list.component';
import { TransactionService } from './transaction.service';

const transactionRouting: ModuleWithProviders = RouterModule.forChild([
  { path: 'transactions', component: TransactionListComponent }
]);

@NgModule({
  imports: [
    CommonModule,
    transactionRouting,
    HttpClientModule
  ],
  declarations: [
    TransactionListComponent
  ],
  providers: [
    TransactionService
  ]
})
export class TransactionModule { }
