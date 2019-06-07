import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import App from "../App";
import PlayerHand from "../components/PlayerHand";

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
  it("should display selected hand when submitting player hand", () => {
    const { getByTestId, getByText } = render(<App />);
    const submit = getByTestId("submit-hand");
    const selectedHand = getByTestId("selected-hand");
    fireEvent.click(submit);
    expect(selectedHand).toHaveTextContent("Rock");
    expect(getByText("rock.svg")).toBeInTheDocument();
  });
});
