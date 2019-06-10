import React from "react";
import { render, cleanup } from "@testing-library/react";
import GameEngine from "../components/GameEngine";

afterEach(cleanup);

describe("GameEngine", () => {
  it("abides to rules of rock, paper and scissors", () => {
    const { getByText, rerender } = render(
      <GameEngine playerHand={"Rock"} opponentHand={"Scissors"} />
    );
    expect(getByText("Player1 Wins")).toBeInTheDocument();
    rerender(<GameEngine playerHand={"Rock"} opponentHand={"Paper"} />);
    expect(getByText("Player1 loses")).toBeInTheDocument();
    rerender(<GameEngine playerHand={"Rock"} opponentHand={"Rock"} />);
    expect(getByText("Draw!")).toBeInTheDocument();
  });
});
