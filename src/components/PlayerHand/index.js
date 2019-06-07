import React, { useState } from "react";
import PropTypes from "prop-types";

function PlayerHand(props) {
  const [value, setValue] = useState("Rock");

  const handleChange = event => setValue(event.target.value);

  return (
    <div data-testid="player-hand" className="player-hand">
      <form>
        <fieldset>
          <legend>Choose your hand</legend>
          <label>
            Rock
            <input
              type="radio"
              value="Rock"
              checked={value === "Rock"}
              onChange={handleChange}
            />
          </label>
          <label>
            Paper
            <input
              type="radio"
              value="Paper"
              checked={value === "Paper"}
              onChange={handleChange}
            />
          </label>
          <label>
            Scissors
            <input
              type="radio"
              value="Scissors"
              checked={value === "Scissors"}
              onChange={handleChange}
            />
          </label>
        </fieldset>
      </form>
    </div>
  );
}

PlayerHand.propTypes = {};

export default PlayerHand;
