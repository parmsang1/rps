import React, { useState } from "react";
import PropTypes from "prop-types";

function PlayerHand(props) {
  const [value, setValue] = useState("Rock");
  const handleChange = event => setValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    props.selectHand(value);
  };

  return (
    <div data-testid="player-hand" className="player-hand ">
      <form onSubmit={handleSubmit}>
        <fieldset className="form-group">
          <legend className="col-form-label">
            <h4>{`Choose your hand: ${props.player}`}</h4>
          </legend>
          {["Rock", "Paper", "Scissors"].map(r => (
            <div className="form-check-inline" key={r}>
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  value={r}
                  checked={value === r}
                  onChange={handleChange}
                />
                {r}
              </label>
            </div>
          ))}
        </fieldset>
        <button
          data-testid="submit-hand"
          type="submit"
          className="submit-button btn btn-primary"
        >
          Play hand!
        </button>
      </form>
    </div>
  );
}

PlayerHand.propTypes = {
  selectHand: PropTypes.func,
  player: PropTypes.string
};

export default PlayerHand;
