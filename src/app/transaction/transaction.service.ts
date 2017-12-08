import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

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

  private transactionServiceUrl = './mock-api/transactions/transactions.json';

  constructor(
    private http: HttpClient
  ) { }

  private getLocalTransactions(): Observable<Transaction[]> {
    return Observable.of(this.transactions);
  }

  private getRemoteTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionServiceUrl)
                    .do(data => console.log('All: ' + JSON.stringify(data)))
                    .catch(this.handleError);

  }

  getTransactions(): Observable<Transaction[]> {
    return this.getRemoteTransactions();
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';

    if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }

}
