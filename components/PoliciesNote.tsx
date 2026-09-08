import { policies } from "@/data/menu";

export default function PoliciesNote() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 pt-4 text-xs text-cocoa/60">
      <ul className="space-y-1">
        <li>{policies.serviceCharge}</li>
        <li>{policies.pricing}</li>
        <li>{policies.cooking}</li>
        <li>{policies.foodSafety}</li>
      </ul>
    </section>
  );
}
