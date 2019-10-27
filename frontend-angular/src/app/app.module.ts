import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  MatMenuModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TransactionCreateComponent } from './transactions/transaction-create/transaction-create.component';
import { TransactionListComponent } from './transactions/transactions-list/transactions-list.component';
import { HoldingListComponent } from './holdings/holdings-list/holdings-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TransactionCreateComponent,
    TransactionListComponent,
    HoldingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSelectModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-AU'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
