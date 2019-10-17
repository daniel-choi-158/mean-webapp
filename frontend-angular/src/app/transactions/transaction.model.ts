export interface Transaction {
  id: string;
  actionType: string;
  symbol: string;
  quantity: number;
  price: number;
  date: Date;
  commissions: number;
  description: string;
}
