import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import MenuSectionView from "@/components/MenuSectionView";

vi.mock("next/image", () => ({
  default: ({ fill: _fill, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) =>
    React.createElement("img", props),
}));

describe("MenuSectionView", () => {
  it("renders section items and opens an item image", async () => {
    const user = userEvent.setup();
    render(
      <MenuSectionView
        sections={[
          {
            key: "specials",
            title: "Specials",
            items: [{ name: "Tacos", price: 12, photo: "/tacos.jpg" }],
          },
        ]}
      />,
    );

    expect(screen.getByRole("heading", { name: "Specials" })).toBeInTheDocument();
    expect(screen.getByText("Tacos")).toBeInTheDocument();
    expect(screen.getByText("$12.00")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Click to see image" }));

    expect(screen.getByAltText("Tacos")).toBeInTheDocument();
    expect(screen.getByText("Close & keep browsing")).toBeInTheDocument();
  });
});