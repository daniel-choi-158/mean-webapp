import { Transaction } from './transaction.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TransactionsService {

  private transactions: Transaction[] = [];
  private transactionsUpdated = new Subject<Transaction[]>();

  constructor(private http: HttpClient) { }

  getTransactionUpdateListener() {
    return this.transactionsUpdated.asObservable();
  }

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

  getTransaction(id: string) {
    return this.http.get<{ transaction: Transaction }>('http://localhost:3000/api/transactions/' + id);
  }

  addTransaction(transaction: Transaction) {
    this.http.post<{ message: string, transactionID: string }>('http://localhost:3000/api/transactions', transaction)
      .subscribe(responseData => {
        console.log(responseData.message);
        const id = responseData.transactionID;
        transaction.id = id;
        this.transactions.push(transaction);
        this.transactionsUpdated.next([...this.transactions]);
      });
  }

  updateTransaction(id: string, transaction: Transaction) {
    this.http.put('http://localhost:3000/api/transactions/' + id, transaction)
      .subscribe(response => {
        const updatedTransactions = [...this.transactions];
        const oldTransactionIndex = updatedTransactions.findIndex(p => p.id === transaction.id);
        updatedTransactions[oldTransactionIndex] = transaction;
        this.transactions = updatedTransactions;
        this.transactionsUpdated.next([...this.transactions]);
      });
  }

  deleteTransaction(transactionID: string) {
    this.http.delete('http://localhost:3000/api/transactions/' + transactionID)
      .subscribe(() => {
        const updatedTransactions = this.transactions.filter(transaction => transaction.id !== transactionID);
        this.transactions = updatedTransactions;
        this.transactionsUpdated.next([...this.transactions]);
      });
  }
}
