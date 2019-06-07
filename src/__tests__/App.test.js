import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "../App";

afterEach(cleanup);

describe("app", () => {
  it("renders message introducing game", () => {
    const { getByText } = render(<App />);
    expect(getByText("Lets play rock, paper and scissors")).toBeInTheDocument();
  });
  it("contains a hand selection container", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("player-hand")).toBeInTheDocument();
    expect(getByTestId("player-hand")).toHaveClass("player-hand");
  });
  it("contains a opponent hand container", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("opponent-hand")).toBeInTheDocument();
    expect(getByTestId("opponent-hand")).toHaveClass("opponent-hand");
  });
});
