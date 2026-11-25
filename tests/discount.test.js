import test from "node:test";
import assert from "node:assert/strict";
import { calculateDiscount } from "../src/lib/discount.js";

test("20% 할인 계산", () => {
  assert.deepEqual(calculateDiscount(50000, 20), {
    originalPrice: 50000, discountRate: 20, discountAmount: 10000, finalPrice: 40000
  });
});
test("100% 할인은 최종 가격 0원", () => {
  assert.equal(calculateDiscount(1234, 100).finalPrice, 0);
});
test("0% 할인은 원래 가격과 같음", () => {
  assert.equal(calculateDiscount(999, 0).finalPrice, 999);
});
test("음수 가격을 거부", () => {
  assert.throws(() => calculateDiscount(-1, 20), RangeError);
});
test("할인율 범위를 벗어나면 거부", () => {
  assert.throws(() => calculateDiscount(1000, 101), RangeError);
});
test("숫자가 아닌 입력을 거부", () => {
  assert.throws(() => calculateDiscount(NaN, 20), TypeError);
});
