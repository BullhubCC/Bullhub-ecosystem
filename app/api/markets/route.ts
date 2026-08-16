import { NextResponse } from "next/server";

export async function GET() {

  return NextResponse.json({

    markets: [
      {
        symbol: "BTC/USD",
        status: "LIVE"
      },
      {
        symbol: "ETH/USD",
        status: "LIVE"
      },
      {
        symbol: "SOL/USD",
        status: "LIVE"
      }
    ]

  });

}
