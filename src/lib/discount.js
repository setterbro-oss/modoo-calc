/**
 * Calculate a discounted price using integer won values.
 * Inputs must be finite numbers; price must be >= 0 and discount rate 0..100.
 * Result is rounded to the nearest won.
 */
export function calculateDiscount(price, rate) {
  if (!Number.isFinite(price) || !Number.isFinite(rate)) {
    throw new TypeError("가격과 할인율은 숫자여야 합니다.");
  }
  if (price < 0) throw new RangeError("가격은 0 이상이어야 합니다.");
  if (rate < 0 || rate > 100) {
    throw new RangeError("할인율은 0~100 사이여야 합니다.");
  }

  const finalPrice = Math.round(price * (1 - rate / 100));
  return {
    originalPrice: Math.round(price),
    discountRate: rate,
    discountAmount: Math.round(price) - finalPrice,
    finalPrice
  };
}
