import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';

import { Transaction } from '../shared/models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[];

  constructor() { }

  retrieveProducts() {
    this.transactions = [
      {
        id : 1,

        numberCode : "001",
        transactionDate : new Date(),
        description : "The first transaction",
        amount : 9.95,

        type : "Debit",
        contact : "Wal-Mart",
        category : "Expense",
        jobCode : "A1",

        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 2,

        numberCode : "002",
        transactionDate : new Date(),
        description : "The second transaction",
        amount : 19.95,

        type : "Debit",
        contact : "Target",
        category : "Expense",
        jobCode : "A1",

        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 3,

        numberCode : "003",
        transactionDate : new Date(),
        description : "The third transaction",
        amount : 25.50,

        type : "Debit",
        contact : "Walgreens",
        category : "Expense",
        jobCode : "A1",

        createdAt : new Date(),
        updatedAt : new Date()
      }

    ];
  }

  ngOnInit() {
    this.retrieveProducts();
  }

}
