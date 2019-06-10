import React from "react";
import PropTypes from "prop-types";
import HandImage from "../HandImage";
import GameEngine from "../GameEngine";

function ComputerOpponent(props) {
  if (!props.selectedHand) return null;

  const hands = ["Rock", "Paper", "Scissors"];
  const computerHand = hands[Math.floor(Math.random() * hands.length)];

  return (
    <>
      <HandImage selectedHand={props.selectedHand} fill={"lightblue"} />
      <p>{`Computer picks ${computerHand}`}</p>
      <GameEngine playerHand={props.selectedHand} opponentHand={computerHand} />
    </>
  );
}

ComputerOpponent.propTypes = {};

export default ComputerOpponent;
