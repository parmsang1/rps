import React, { useState } from "react";
import PropTypes from "prop-types";

function PlayerHand(props) {
  const [value, setValue] = useState("Rock");
  const handleChange = event => setValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    props.selectHand(value);
    //console.log(props.selectHand);
  };

  return (
    <div data-testid="player-hand" className="player-hand">
      <form onSubmit={handleSubmit}>
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
        <button
          data-testid="submit-hand"
          type="submit"
          className="submit-button"
        >
          Play hand!
        </button>
      </form>
    </div>
  );
}

PlayerHand.propTypes = {};

export default PlayerHand;
