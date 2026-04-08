import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("App", () => {
  it("renders the fresh Seiko 5 editorial information architecture without forms", () => {
    render(<App />);

    const hero = screen.getByRole("region", { name: "Four Seiko 5 references. Four different temperaments." });
    expect(within(hero).getByText("Seiko 5 Sports")).toBeInTheDocument();
    expect(within(hero).getByRole("link", { name: "Explore the four references" })).toHaveAttribute("href", "#models");
    expect(within(hero).queryByRole("link", { name: "Compare the four references" })).not.toBeInTheDocument();
    expect(within(hero).getAllByRole("listitem")).toHaveLength(3);

    expect(screen.getByRole("region", { name: "Pick the Seiko 5 that fits your wrist and routine." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Four watches, one shared mechanical backbone." })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Compare the mood at a glance." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "One platform, four different reasons to wear it." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Start with the reference that already matches how you dress." })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "What keeps these in rotation." })).not.toBeInTheDocument();
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    expect(screen.queryByRole("form")).not.toBeInTheDocument();
  });

  it("surfaces model quick links, editorial model sections, and the full comparison matrix", () => {
    render(<App />);

    expect(screen.getByText("Automatic 4R36 caliber")).toBeInTheDocument();
    expect(screen.getByText("100 m daily-ready water resistance")).toBeInTheDocument();
    expect(screen.getByText("LumiBrite hands and day-date utility")).toBeInTheDocument();

    const quickScan = screen.getByRole("region", { name: "Pick the Seiko 5 that fits your wrist and routine." });
    expect(within(quickScan).getByRole("link", { name: /SRPD55/i })).toHaveAttribute("href", "#srpd55");
    expect(within(quickScan).getByRole("link", { name: /SSK003/i })).toHaveAttribute("href", "#ssk003");
    expect(within(quickScan).getByRole("link", { name: /SRPG27/i })).toHaveAttribute("href", "#srpg27");
    expect(within(quickScan).getByRole("link", { name: /SRPK87/i })).toHaveAttribute("href", "#srpk87");
    expect(within(quickScan).getByText("Dark everyday sports watch")).toBeInTheDocument();
    expect(within(quickScan).getByText("Travel-ready GMT energy")).toBeInTheDocument();
    expect(within(quickScan).getByText("Field-first clarity")).toBeInTheDocument();
    expect(within(quickScan).getByText("Compact polished ease")).toBeInTheDocument();

    expect(screen.getByRole("article", { name: "SRPD55 Night-Dial Sports" })).toBeInTheDocument();
    expect(screen.getByRole("article", { name: "SSK003 GMT Blue" })).toBeInTheDocument();
    expect(screen.getByRole("article", { name: "SRPG27 Field Balance" })).toBeInTheDocument();
    expect(screen.getByRole("article", { name: "SRPK87 Compact Polish" })).toBeInTheDocument();
    expect(screen.getAllByText("Bracelet / strap")).toHaveLength(4);
    expect(screen.getByRole("img", { name: "SRPD55 Night-Dial Sports watch illustration" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "SSK003 GMT Blue watch illustration" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "SRPG27 Field Balance watch illustration" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "SRPK87 Compact Polish watch illustration" })).toBeInTheDocument();

    const spotlight = screen.getByRole("region", { name: "Compare the mood at a glance." });
    expect(within(spotlight).getByText("Style mood")).toBeInTheDocument();
    expect(within(spotlight).getByText("Best for")).toBeInTheDocument();
    expect(within(spotlight).getByText("Standout detail")).toBeInTheDocument();
    expect(within(spotlight).getByText("Wrist read")).toBeInTheDocument();
    expect(within(spotlight).getAllByText("SRPD55").length).toBeGreaterThan(0);
    expect(within(spotlight).getAllByText("SSK003").length).toBeGreaterThan(0);
    expect(within(spotlight).getAllByText("SRPG27").length).toBeGreaterThan(0);
    expect(within(spotlight).getAllByText("SRPK87").length).toBeGreaterThan(0);
  });
});
