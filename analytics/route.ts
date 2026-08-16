import { NextResponse } from "next/server";

export async function GET() {

  return NextResponse.json({

    market: "BTC/USD",

    change: 0,

    volume: 0,

    volatility: 0,

    trend: "NEUTRAL"

  });

}
