import React, { useState } from "react";
import PropTypes from "prop-types";
import PlayerHand from "../PlayerHand";
import HandImage from "../HandImage";
import GameEngine from "../GameEngine";

function HumanOpponent(props) {
  const [selectedHand, setValue] = useState("");
  const selectHand = hand => {
    setValue(hand);
  };

  if (!props.playerOneHand) return null;

  return (
    <div data-testid="human-hand" className="human-hand">
      <PlayerHand player={"Player2"} selectHand={selectHand} />
      <HandImage selectedHand={selectedHand} fill={"lightblue"} />
      <GameEngine
        playerHand={props.playerOneHand}
        opponentHand={selectedHand}
      />
    </div>
  );
}

HumanOpponent.propTypes = {};

export default HumanOpponent;
