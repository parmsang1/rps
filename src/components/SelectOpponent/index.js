import React, { useState } from "react";
import PropTypes from "prop-types";

function SelectOpponent(props) {
  const [value, setValue] = useState("Computer");
  const handleChange = event => setValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    props.selectOpponent(value);
  };

  return (
    <div data-testid="select-opponent" className="select-opponent">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Choose your hand</legend>
          {["Computer", "Human"].map(r => (
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
          data-testid="submit-opponent"
          type="submit"
          className="submit-button"
        >
          Select Opponent / Reset Hand
        </button>
      </form>
    </div>
  );
}

SelectOpponent.propTypes = {};

export default SelectOpponent;
