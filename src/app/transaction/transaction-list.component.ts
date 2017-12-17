import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

import { Transaction } from '../shared/models/transaction.model';
import { TransactionType } from '../shared/models/transaction-type.enum';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = <Transaction[]>[];
  TransactionType: typeof TransactionType = TransactionType;

  constructor(
    private router: Router,
    private transactionService: TransactionService
  ) { }

  refresh() {
    this.transactionService.getTransactions()
      .subscribe(transactions => this.transactions = transactions,
                 error => console.log(error),
                 () => {});
  }

  ngOnInit() {
    this.refresh();
  }

  onNewTransaction() {

  }

  onNewTransaction_shortcut() {
//  alert('ToDo: Implement New Transaction');
    this.transactionService.createTransaction(
      {
        "id" : 0,

        "numberCode" : "010",
        "transactionDate" : new Date(),
        "description" : "Printing supplies, ink, paper",
        "amount" : 40,

        "type" : TransactionType.Expense,
        "contact" : "Staples",
        "category" : "Office supplies",
        "jobCode" : "A1",

        "createdAt" : new Date(),
        "updatedAt" : new Date()
      }

    );

    this.refresh();
  }

  onDeleteTransaction(transaction: Transaction) {
    this.transactionService.deleteTransaction(transaction);
    this.refresh();
  }

}
