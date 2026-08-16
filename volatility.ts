export function calculateVolatility(
  prices: number[]
): number {

  if (prices.length < 2) {
    return 0;
  }

  const average =
    prices.reduce(
      (sum, price) => sum + price,
      0
    ) / prices.length;

  const variance =
    prices.reduce(
      (sum, price) =>
        sum + Math.pow(price - average, 2),
      0
    ) / prices.length;

  return Number(
    Math.sqrt(variance).toFixed(6)
  );
}
