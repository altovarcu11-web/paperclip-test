import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("App", () => {
  it("renders the broader Seiko portfolio landing page without forms", () => {
    render(<App />);

    const hero = screen.getByRole("region", {
      name: "A curated Seiko portfolio spanning tool, dress, travel, and heritage watches.",
    });

    expect(within(hero).getByText("Curated Seiko Collection")).toBeInTheDocument();
    expect(within(hero).getByRole("heading", { name: "One Seiko name. Four very different ways to wear it." })).toBeInTheDocument();
    expect(within(hero).getByRole("link", { name: "Explore the portfolio" })).toHaveAttribute("href", "#portfolio");
    expect(within(hero).getByRole("link", { name: "Compare the references" })).toHaveAttribute("href", "#matrix");
    expect(within(hero).getAllByRole("listitem")).toHaveLength(3);

    expect(screen.getByRole("heading", { name: "Four collection directions, one coherent brand." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Four references that prove Seiko is more than one lane." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "How the four references separate on wrist." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Why these watches still feel unmistakably Seiko." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Pick the Seiko that already matches your pace." })).toBeInTheDocument();
    expect(screen.queryByRole("form")).not.toBeInTheDocument();
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  });

  it("renders the featured Seiko families, references, and comparison matrix", () => {
    render(<App />);

    const portfolio = screen.getByRole("region", { name: "Quickly jump to the Seiko family that fits your taste." });
    expect(within(portfolio).getByRole("link", { name: /Prospex SPB143/i })).toHaveAttribute("href", "#spb143");
    expect(within(portfolio).getByRole("link", { name: /Presage SRPB41/i })).toHaveAttribute("href", "#srpb41");
    expect(within(portfolio).getByRole("link", { name: /Astron SSH167/i })).toHaveAttribute("href", "#ssh167");
    expect(within(portfolio).getByRole("link", { name: /King Seiko SJE095/i })).toHaveAttribute("href", "#sje095");

    const prospex = screen.getByRole("article", { name: "Prospex SPB143" });
    const presage = screen.getByRole("article", { name: "Presage SRPB41" });
    const astron = screen.getByRole("article", { name: "Astron SSH167" });
    const kingSeiko = screen.getByRole("article", { name: "King Seiko SJE095" });

    expect(within(prospex).getByText("Diver restraint without retro costume")).toBeInTheDocument();
    expect(within(presage).getByText("Dial texture and evening polish")).toBeInTheDocument();
    expect(within(astron).getByText("Precision travel with a technical edge")).toBeInTheDocument();
    expect(within(kingSeiko).getByText("Sharp heritage tailored for modern collectors")).toBeInTheDocument();

    const matrix = screen.getByRole("region", { name: "Structured comparison of the featured Seiko references." });
    expect(within(matrix).getByText("Movement")).toBeInTheDocument();
    expect(within(matrix).getByText("Style posture")).toBeInTheDocument();
    expect(within(matrix).getByText("Water resistance")).toBeInTheDocument();
    expect(within(matrix).getByText("Ideal owner")).toBeInTheDocument();
    expect(within(matrix).getByText("Overall mood")).toBeInTheDocument();
    expect(within(matrix).getAllByText("SPB143").length).toBeGreaterThan(0);
    expect(within(matrix).getAllByText("SRPB41").length).toBeGreaterThan(0);
    expect(within(matrix).getAllByText("SSH167").length).toBeGreaterThan(0);
    expect(within(matrix).getAllByText("SJE095").length).toBeGreaterThan(0);
  });
});
