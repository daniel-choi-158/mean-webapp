import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionCreateComponent } from './transactions/transaction-create/transaction-create.component';
import { TransactionListComponent } from './transactions/transactions-list/transactions-list.component';

const routes: Routes = [
  { path: '', component: TransactionListComponent },
  {path: 'create', component: TransactionCreateComponent},
  {path: 'edit/:transactionID', component: TransactionCreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
