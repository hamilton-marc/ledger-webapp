import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TransactionListComponent } from './transaction-list.component';
import { TransactionService } from './transaction.service';
import { TransactionEntryComponent } from './transaction-entry/transaction-entry.component';

const transactionRouting: ModuleWithProviders = RouterModule.forChild([
  { path: 'transactions', component: TransactionListComponent },
  { path: 'transaction', component: TransactionEntryComponent }
]);

@NgModule({
  imports: [
    CommonModule,
    transactionRouting,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TransactionListComponent,
    TransactionEntryComponent
  ],
  providers: [
    TransactionService
  ]
})
export class TransactionModule { }
