import { Holding } from './holding.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class HoldingsService {

  private Holdings: Holding[];
  private HoldingsUpdated = new Subject<Holding[]>();

  constructor(private http: HttpClient) { }

  getHoldingUpdateListener() {
    return this.HoldingsUpdated.asObservable();
  }

  getHoldings() {
    return this.http.get<{ Holdings: Holding[] }>('http://localhost:3000/api/holdings/');
  }

  getHolding(id: string) {
    return this.http.get<{ Holding: Holding }>('http://localhost:3000/api/holdings/' + id);
  }


  addHolding(holding: Holding) {
  }

  updateHolding(id: string, holding: Holding) {
  }

  deleteHolding(HoldingID: string) {
  }
}
