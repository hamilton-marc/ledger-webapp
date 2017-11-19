import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
        entryDate : new Date(),
        description : "The first transaction",
        amount : 9.95,

        type : "Debit",
        contact : "Wal-Mart",
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
