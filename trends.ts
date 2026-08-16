export function detectTrend(
  prices: number[]
) {

  if (prices.length < 2) {
    return "NEUTRAL";
  }

  const first = prices[0];
  const last = prices[prices.length - 1];

  if (last > first) {
    return "BULLISH";
  }

  if (last < first) {
    return "BEARISH";
  }

  return "NEUTRAL";
}
