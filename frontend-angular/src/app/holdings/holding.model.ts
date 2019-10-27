import { Transaction } from '../transactions/transaction.model';
import { Instrument } from '../instruments/instrument.model';


export interface Holding {
  id: string;
  symbol: string;
  instrument: Instrument;
  transactions: Transaction[];
  avgPurchasePrice: number;
  totalCurrentHoldings: number;
  unrealisedValue: number;
  realisedValue: number;
  description: string;
}
