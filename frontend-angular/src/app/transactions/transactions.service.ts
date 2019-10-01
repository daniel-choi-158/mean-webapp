import { Transaction } from './transaction.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class TransactionsService {

  private transactions: Transaction[] = [];
  private transactionsUpdated = new Subject<Transaction[]>();

  constructor(private http: HttpClient) { }

  getTransactions() {
    this.http
      .get<{ message: string; transactions: Transaction[] }>(
        'http://localhost:3000/api/transactions'
      )
      .subscribe(transactionData => {
        this.transactions = transactionData.transactions;
        this.transactionsUpdated.next([...this.transactions]);
      });
  }

  getTransactionUpdateListener() {
    return this.transactionsUpdated.asObservable();
  }

  addTransaction(transaction: Transaction) {
    this.http.post<{ message: string }>('http://localhost:3000/api/transactions', transaction)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.transactions.push(transaction);
        this.transactionsUpdated.next([...this.transactions]);
      });
  }
}
