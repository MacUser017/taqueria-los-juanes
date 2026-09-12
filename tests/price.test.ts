import { describe, expect, it } from "vitest";
import { formatPrice } from "@/lib/price";

describe("formatPrice", () => {
  it("formats a regular price", () => {
    expect(formatPrice({ name: "Tacos", price: 12.5 })).toBe("$12.50");
  });

  it("includes a price note", () => {
    expect(formatPrice({ name: "Tacos", price: 12, priceNote: "plate" })).toBe("$12.00 / plate");
  });

  it("handles market-priced items", () => {
    expect(formatPrice({ name: "Guacamole", marketPrice: true })).toBe("Market Price");
  });

  it("returns an empty string when no price exists", () => {
    expect(formatPrice({ name: "Daily special" })).toBe("");
  });
});