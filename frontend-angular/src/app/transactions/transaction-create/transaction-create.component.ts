import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TransactionsService } from '../transactions.service';
import { Transaction } from '../transaction.model';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})

export class TransactionCreateComponent implements OnInit {
  transaction: Transaction;
  private mode = 'create';
  private transactionID: string;

  constructor(public transactionService: TransactionsService, public route: ActivatedRoute) { }

    ngOnInit() {
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has('transactionID')) {
          this.mode = 'edit';
          this.transactionID = paramMap.get('transactionID');
          this.transactionService.getTransaction(this.transactionID).subscribe(transactionData => {
            this.transaction = {
              id: transactionData.id,
              actionType: transactionData.actionType,
              quantity: transactionData.quantity,
              symbol: transactionData.symbol,
              price: transactionData.price,
              date: transactionData.date,
              commissions: transactionData.commissions,
              description: transactionData.description
            }
          });
        } else {
          this.mode = 'create';
          this.transactionID = null;
        }
      });
  }

  onSaveTransaction(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const transaction: Transaction = {
      id: '',
      actionType: form.value.actionType,
      quantity: form.value.quantity,
      symbol: form.value.symbol,
      price: form.value.price,
      date: form.value.date,
      commissions: form.value.commissions,
      description: form.value.description
    };
    if (this.mode === 'create') {
      this.transactionService.addTransaction(transaction);
    } else {
      this.transactionService.updateTransaction(
        this.transactionID,
        transaction
      );
    }
    form.resetForm();
  }
}
