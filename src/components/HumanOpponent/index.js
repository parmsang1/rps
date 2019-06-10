import React, { useState } from "react";
import PropTypes from "prop-types";
import PlayerHand from "../PlayerHand";
import HandImage from "../HandImage";

function HumanOpponent(props) {
  const [selectedHand, setValue] = useState("");
  const selectHand = hand => {
    setValue(hand);
  };

  if (!props.playerOneHand) return null;

  props.updateOpponentHand(selectedHand);

  return (
    <div
      data-testid="human-hand"
      className="human-hand col-6"
      style={{ alignSelf: "flex-start" }}
    >
      <PlayerHand player={"Player2"} selectHand={selectHand} />
      <HandImage selectedHand={selectedHand} fill={"lightblue"} />
      {selectedHand && (
        <p data-testid="selected-hand">{`Player2 picks ${selectedHand}`}</p>
      )}
    </div>
  );
}

HumanOpponent.propTypes = {
  selectHand: PropTypes.string,
  playerOneHand: PropTypes.string,
  updateOpponentHand: PropTypes.func
};

export default HumanOpponent;
