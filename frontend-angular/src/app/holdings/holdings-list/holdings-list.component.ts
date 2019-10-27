import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Holding } from '../holding.model';
import { HoldingsService } from '../holdings.service';

import { Instrument } from '../../instruments/instrument.model';
import { InstrumentsService } from '../../instruments/instruments.service';

@Component({
  selector: 'app-holdings-list',
  templateUrl: './holdings-list.component.html',
  styleUrls: ['./holdings-list.component.css']
})

export class HoldingListComponent implements OnInit, OnDestroy {

  holdings: Holding[] = [];
  private holdingsSub: Subscription;

  constructor(public holdingsService: HoldingsService) { }
  ngOnInit() {
    this.holdingsService.getHoldings();
    this.holdingsSub = this.holdingsService.getHoldingUpdateListener()
      .subscribe((holdings: Holding[]) => {
        this.holdings = holdings;
      });
  }

  ngOnDestroy() {
    this.holdingsSub.unsubscribe();
  }
/*
  onDelete(transactionID: string) {
    this.holdingsService.deleteTransaction(transactionID);
  }
  */
}
