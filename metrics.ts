export interface MarketMetrics {
  price: number;
  previousPrice: number;
  volume: number;
}

export function calculateMetrics(
  data: MarketMetrics
) {

  const change =
    data.previousPrice === 0
      ? 0
      : ((data.price - data.previousPrice) /
          data.previousPrice) *
        100;

  return {
    price: data.price,
    volume: data.volume,
    change: Number(change.toFixed(4))
  };
}
