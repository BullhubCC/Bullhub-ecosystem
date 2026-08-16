export interface PriceData {
  symbol: string;
  price: number;
  previousPrice: number;
  timestamp: number;
}

export function calculateChange(data: PriceData) {
  if (data.previousPrice === 0) {
    return 0;
  }

  return (
    ((data.price - data.previousPrice) /
      data.previousPrice) *
    100
  );
}

export function getDirection(data: PriceData) {
  if (data.price > data.previousPrice) {
    return "HIGHER";
  }

  if (data.price < data.previousPrice) {
    return "LOWER";
  }

  return "FLAT";
}
