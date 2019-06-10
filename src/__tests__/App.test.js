import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import App from "../App";

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
    const { getByTestId, getAllByText } = render(<App />);
    const submit = getByTestId("submit-hand");
    const selectedHand = getByTestId("selected-hand");
    fireEvent.click(submit);
    expect(selectedHand).toHaveTextContent("Rock");
    expect(getAllByText("rock.svg")[0]).toBeInTheDocument();
  });
  it("can reset the game", () => {
    const { getByTestId, getAllByText } = render(<App />);
    const submit = getByTestId("submit-hand");
    const reset = getByTestId("submit-opponent");
    fireEvent.click(submit);
    const handImage = getAllByText("rock.svg");
    expect(handImage[0]).toBeInTheDocument();
    fireEvent.click(reset);
    expect(handImage[0]).not.toBeInTheDocument();
  });
  it("can play against a computer", () => {
    const { getByTestId, getByText } = render(<App />);
    const submit = getByTestId("submit-hand");
    const selectedHand = getByTestId("selected-hand");
    fireEvent.click(submit);
    expect(selectedHand).toHaveTextContent("Rock");
    expect(getByText("Player1 Wins")).toBeInTheDocument();
  });
  it("can play against another human", () => {
    const { getByTestId, getByText, getByLabelText, debug } = render(<App />);
    const submitOpponent = getByTestId("submit-opponent");
    const submit = getByTestId("submit-hand");

    fireEvent.click(getByLabelText("Human"));
    fireEvent.click(submitOpponent);
    fireEvent.click(submit);
    expect(getByText("Choose your hand: Player2")).toBeInTheDocument();
    fireEvent.click(submit);
    expect(getByText("Player1 Wins")).toBeInTheDocument();
  });
});
