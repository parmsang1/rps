import React from "react";
import PropTypes from "prop-types";

function GameEngine(props) {
  const checkWinningHand = (playerHand, opponentHand) => {
    if (playerHand === opponentHand) return "Draw!";
    if (playerHand === "Rock" && opponentHand === "Scissors")
      return "Player1 Wins";
    if (playerHand === "Rock" && opponentHand === "Paper")
      return "Player1 loses";
    if (playerHand === "Paper" && opponentHand === "Scissors")
      return "Player1 loses";
    if (playerHand === "Paper" && opponentHand === "Rock")
      return "Player1 Wins";
    if (playerHand === "Rock" && opponentHand === "Paper")
      return "Player1 loses";
    if (playerHand === "Scissors" && opponentHand === "Paper")
      return "Player1 wins";
    if (playerHand === "Scissors" && opponentHand === "Rock")
      return "Player1 loses";
  };
  return <h2>{checkWinningHand(props.playerHand, props.opponentHand)}</h2>;
}

GameEngine.propTypes = {};

export default GameEngine;
