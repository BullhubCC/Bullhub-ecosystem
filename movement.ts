export type Movement = "HIGHER" | "LOWER" | "FLAT";

export function detectMovement(
  current: number,
  previous: number
): Movement {

  if (current > previous) {
    return "HIGHER";
  }

  if (current < previous) {
    return "LOWER";
  }

  return "FLAT";
}

export function calculatePercentageChange(
  current: number,
  previous: number
): number {

  if (previous === 0) {
    return 0;
  }

  return Number(
    (((current - previous) / previous) * 100)
      .toFixed(4)
  );
}
