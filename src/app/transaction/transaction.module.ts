import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TransactionListComponent } from './transaction-list.component';
import { TransactionService } from './transaction.service';

const transactionRouting: ModuleWithProviders = RouterModule.forChild([
  { path: 'transactions', component: TransactionListComponent }
]);

@NgModule({
  imports: [
    CommonModule,
    transactionRouting
  ],
  declarations: [
    TransactionListComponent
  ],
  providers: [
    TransactionService
  ]
})
export class TransactionModule { }
