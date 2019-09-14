import { Transaction } from './transaction.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class TransactionsService {

  private transactions: Transaction[] = [];
  private transactionsUpdated = new Subject<Transaction[]>();

  getTransactions() {
    return [...this.transactions];
  }

  getTransactionUpdateListener() {
    return this.transactionsUpdated.asObservable();
  }

  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
    this.transactionsUpdated.next([...this.transactions]);
  }
}
