export interface MarketProvider {
  getPrice(symbol: string): Promise<number>;
}

export class MockProvider
  implements MarketProvider {

  async getPrice(
    symbol: string
  ): Promise<number> {

    console.log(
      `Fetching price for ${symbol}`
    );

    return 0;
  }
}
