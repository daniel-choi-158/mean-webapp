import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Transaction } from '../transaction.model';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionListComponent implements OnInit, OnDestroy {
  /*
  transactions = [
    { title: 'first transaction', content: 'this is first transaction' },
    { title: 'second transaction', content: 'this is second transaction' },
    { title: 'third transaction', content: 'this is third transaction' },
  ];
  */
  transactions: Transaction[] = [];
  private transactionsSub: Subscription;

  constructor(public transactionsService: TransactionsService) { }
  ngOnInit() {
    this.transactions = this.transactionsService.getTransactions();
    this.transactionsSub = this.transactionsService.getTransactionUpdateListener()
      .subscribe((transactions: Transaction[]) => {
        this.transactions = transactions;
      });
  }

  ngOnDestroy() {
    this.transactionsSub.unsubscribe();
  }
}
