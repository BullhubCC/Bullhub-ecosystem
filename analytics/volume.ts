export interface TradeData {
  price: number;
  quantity: number;
}

export function calculateVolume(
  trades: TradeData[]
): number {

  return trades.reduce(
    (total, trade) =>
      total + trade.price * trade.quantity,
    0
  );
}
