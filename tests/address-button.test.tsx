import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import AddressButton from "@/components/AddressButton";

describe("AddressButton", () => {
  it("opens the address dialog and map link", async () => {
    const user = userEvent.setup();
    render(<AddressButton />);

    await user.click(screen.getByRole("button", { name: "Show restaurant address" }));

    expect(screen.getByText("373 Jonestown Rd, Winston Salem, NC 27104")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Open in Google Maps" })).toHaveAttribute(
      "href",
      expect.stringContaining("373%20Jonestown%20Rd"),
    );
  });

  it("closes the address dialog", async () => {
    const user = userEvent.setup();
    render(<AddressButton />);

    await user.click(screen.getByRole("button", { name: "Show restaurant address" }));
    await user.click(screen.getByRole("button", { name: "Close" }));

    expect(screen.queryByText("373 Jonestown Rd, Winston Salem, NC 27104")).not.toBeInTheDocument();
  });
});