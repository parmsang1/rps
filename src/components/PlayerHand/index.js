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
          {["Rock", "Paper", "Scissors"].map(r => (
            <label key={r}>
              {r}
              <input
                type="radio"
                value={r}
                checked={value === r}
                onChange={handleChange}
              />
            </label>
          ))}
        </fieldset>
      </form>
    </div>
  );
}

PlayerHand.propTypes = {};

export default PlayerHand;
