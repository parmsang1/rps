import React from "react";
import PropTypes from "prop-types";
import HandImage from "../HandImage";

function ComputerOpponent(props) {
  if (!props.selectedHand) return null;

  const hands = ["Rock", "Paper", "Scissors"];
  const computerHand = hands[Math.floor(Math.random() * hands.length)];
  props.updateOpponentHand(computerHand);

  return (
    <div className="col-6" style={{ alignSelf: "flex-end" }}>
      <HandImage selectedHand={computerHand} fill={"lightblue"} />
      <p>{`Computer picks ${computerHand}`}</p>
    </div>
  );
}

ComputerOpponent.propTypes = {
  selectedHand: PropTypes.string,
  updateOpponentHand: PropTypes.func
};

export default ComputerOpponent;
