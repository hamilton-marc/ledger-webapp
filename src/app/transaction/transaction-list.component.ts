import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';

import { Transaction } from '../shared/models/transaction.model';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = <Transaction[]>[];

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.transactionService.getTransactions()
      .subscribe(transactions => this.transactions = transactions,
                 error => console.log(error),
                 () => {});
  }

}
