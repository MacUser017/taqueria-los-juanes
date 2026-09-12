import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Navbar from "@/components/Navbar";

const { usePathname } = vi.hoisted(() => ({ usePathname: vi.fn() }));

vi.mock("next/navigation", () => ({ usePathname }));
vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) =>
    React.createElement("a", { href, ...props }, children),
}));

describe("Navbar", () => {
  beforeEach(() => {
    usePathname.mockReturnValue("/");
  });

  it("highlights Home on the home route", () => {
    render(<Navbar />);

    expect(screen.getAllByRole("link", { name: "Home" })[0]).toHaveClass("bg-marigold");
    expect(screen.getAllByRole("link", { name: "Food Menu" })[0]).not.toHaveClass("bg-marigold");
  });

  it("highlights the active page tab", () => {
    usePathname.mockReturnValue("/drinks");
    render(<Navbar />);

    expect(screen.getAllByRole("link", { name: "Drinks Menu" })[0]).toHaveClass("bg-marigold");
    expect(screen.getAllByRole("link", { name: "Food Menu" })[0]).not.toHaveClass("bg-marigold");
  });
});