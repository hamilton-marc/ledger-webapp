import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Transaction } from '../shared/models/transaction.model';

@Injectable()
export class TransactionService {
  private transactions: Transaction[] = [
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
    },
    {
      id : 4,

      numberCode : "004",
      transactionDate : new Date(),
      description : "The fourth transaction",
      amount : 35,

      type : "Debit",
      contact : "OfficeMax",
      category : "Expense",
      jobCode : "A1",

      createdAt : new Date(),
      updatedAt : new Date()
    }
  ];

  getTransactions(): Observable<Transaction[]> {
    return Observable.of(this.transactions);
  }

  constructor() { }

}
