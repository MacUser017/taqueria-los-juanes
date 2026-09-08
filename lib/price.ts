import { MenuItem } from "@/data/menu";

export function formatPrice(item: MenuItem): string {
  if (item.marketPrice) return "Market Price";
  if (item.price == null) return "";
  const base = `$${item.price.toFixed(2)}`;
  return item.priceNote ? `${base} / ${item.priceNote}` : base;
}
