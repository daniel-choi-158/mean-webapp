import { Instrument } from './instrument.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class InstrumentsService {

  // private instruments: Instrument[] = [];
  private instrument: Instrument;
  private instrumentUpdated = new Subject<Instrument>();

  constructor(private http: HttpClient) { }

  getInstrumentUpdateListener() {
    return this.instrumentUpdated.asObservable();
  }

  getInstrument(id: string) {
    this.http.get<Instrument>('http://localhost:3000/api/instruments/' + id)
      .subscribe(instrumentData => {
        this.instrument = instrumentData;
      });

  }

  /*
  getInstruments() {
    return this.http.get<{ instruments: Instrument[] }>('http://localhost:3000/api/instruments/');
  }
  */

/*
  addTransaction(transaction: Transaction) {
  }

  updateTransaction(id: string, transaction: Transaction) {
  }

  deleteTransaction(transactionID: string) {
  }
  */
}
