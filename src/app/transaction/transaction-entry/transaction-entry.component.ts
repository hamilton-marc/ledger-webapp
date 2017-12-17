import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Transaction, TransactionType } from '../../shared/models';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-entry',
  templateUrl: './transaction-entry.component.html',
  styleUrls: ['./transaction-entry.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TransactionEntryComponent implements OnInit {
  transactionEntryForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.transactionEntryForm = this.formBuilder.group({
      'numberCode':       ['010', Validators.required],
      'transactionDate':  [new Date(), Validators.required],
      'contact':          ['Staples', Validators.required],
      'amount':           [39.95, Validators.required],
      'description':      ['Printing supplies, ink, paper', Validators.required],
      'type':             ['Expense', Validators.required],
      'category':         ['Office Supplies']
    });
  }

  saveTransaction() {
    if (!this.transactionEntryForm.valid) {
      alert(`Some of your entries are missing or invalid, please correct them`);
      return;
    }

    const transaction: Transaction = {
      'id' : 0,

      'numberCode' : this.transactionEntryForm.value.numberCode,
      'transactionDate' : new Date(),
      'description' : this.transactionEntryForm.value.description,
      'amount' : this.transactionEntryForm.value.amount,

      'type' : TransactionType.Expense,
      'contact' : this.transactionEntryForm.value.contact,
      'category' : this.transactionEntryForm.value.category,
      'jobCode' : '',

      'createdAt' : new Date(),
      'updatedAt' : new Date()
    };

    this.transactionService.createTransaction(transaction);
    this.router.navigateByUrl('/transactions');
  }
}
