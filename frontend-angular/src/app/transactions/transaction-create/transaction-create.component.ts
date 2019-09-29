import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TransactionsService } from '../transactions.service';
import { Transaction } from '../transaction.model';


@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent {
  enteredQuantity = '';
  enteredActionType = '';
  enteredsymbol = '';
  enteredPrice = '';
  enteredDate = '';
  enteredCommissions = '';
  enteredDescription = '';

  constructor(public transactionService: TransactionsService) { }

  onAddTransaction(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const transaction: Transaction = {
      id: form.value.transaction,
      actionType: form.value.actionType,
      quantity: form.value.quantity,
      symbol: form.value.symbol,
      price: form.value.price,
      date: form.value.date,
      commissions: form.value.commissions,
      description: form.value.description
    };
    this.transactionService.addTransaction(transaction);
    form.resetForm();
  }
}
