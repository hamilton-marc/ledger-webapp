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
  private static transactions: Transaction[] = null;
  private serviceUrl = './mock-api/transactions/transactions.json';
  private newTransactionId = 10;

  constructor(
    private http: HttpClient
  ) { }

  getTransactions(): Observable<Transaction[]> {
    if (TransactionService.transactions == null) {
      return this.http.get<Transaction[]>(this.serviceUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .do(data => TransactionService.transactions = data)
      .catch(this.handleError);
    }

    return Observable.of(TransactionService.transactions);
  }

  createTransaction(newTransaction: Transaction) {
    newTransaction.id = this.newTransactionId++;
    newTransaction.numberCode = String(newTransaction.id).padStart(3, '0');

    TransactionService.transactions.push(newTransaction);
  }

  deleteTransaction(transaction: Transaction) {
    const deleteIndex = TransactionService.transactions.indexOf(transaction);

    if (deleteIndex > -1) {
      TransactionService.transactions.splice(deleteIndex, 1);
    }
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
