import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import App from "../App";
import PlayerHand from "../components/PlayerHand";

afterEach(cleanup);

jest.mock("../components/GameEngine", () => {
  return () => <h2>Player1 Wins</h2>;
});

describe("App", () => {
  it("renders message introducing game", () => {
    const { getByText } = render(<App />);
    expect(getByText("Lets play rock, paper and scissors")).toBeInTheDocument();
  });
  it("contains a hand selection container", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("player-hand")).toBeInTheDocument();
    expect(getByTestId("player-hand")).toHaveClass("player-hand");
  });
  it("should display selected hand when submitting player hand", () => {
    const { getByTestId, getByText } = render(<App />);
    const submit = getByTestId("submit-hand");
    const selectedHand = getByTestId("selected-hand");
    fireEvent.click(submit);
    expect(selectedHand).toHaveTextContent("Rock");
    expect(getByText("rock.svg")).toBeInTheDocument();
  });
  it("can reset the game", () => {
    const { getByTestId, getByText } = render(<App />);
    const submit = getByTestId("submit-hand");
    const reset = getByTestId("submit-opponent");
    fireEvent.click(submit);
    const handImage = getByText("rock.svg");
    expect(handImage).toBeInTheDocument();
    fireEvent.click(reset);
    expect(handImage).not.toBeInTheDocument();
  });

  it("can play against a computer", () => {
    const { getByTestId, getByText } = render(<App />);
    const submit = getByTestId("submit-hand");
    const selectedHand = getByTestId("selected-hand");
    fireEvent.click(submit);
    expect(selectedHand).toHaveTextContent("Rock");
    expect(getByText("Player1 Wins")).toBeInTheDocument();
  });
});
