import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Transaction } from '../shared/models/transaction.model';
import { TransactionType } from '../shared/models/transaction-type.enum';

@Injectable()
export class TransactionService {
  private transactions: Transaction[] = [
    {
      id : 1,

      numberCode : "001",
      transactionDate : new Date(),
      description : "Seed money from small business loan",
      amount : 1500,

      type : TransactionType.Contribution,
      contact : "Small Business Association",
      category : "Capital infusion",
      jobCode : "",

      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id : 2,

      numberCode : "002",
      transactionDate : new Date(),
      description : "Office decorations",
      amount : 19.95,

      type : TransactionType.Expense,
      contact : "Target",
      category : "Office supplies",
      jobCode : "A1",

      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id : 3,

      numberCode : "003",
      transactionDate : new Date(),
      description : "Office first aid kit",
      amount : 25.50,

      type : TransactionType.Expense,
      contact : "Walgreens",
      category : "Office supplies",
      jobCode : "A1",

      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id : 4,

      numberCode : "004",
      transactionDate : new Date(),
      description : "Pens, paper, stapler, sticky pads",
      amount : 35,

      type : TransactionType.Expense,
      contact : "OfficeMax",
      category : "Office supplies",
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
