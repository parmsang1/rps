import React, { useState } from "react";
import PropTypes from "prop-types";

function SelectOpponent(props) {
  const [value, setValue] = useState("Computer");
  const handleChange = event => {
    setValue(event.target.value);
    props.selectOpponent(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.selectOpponent(value);
  };

  return (
    <div data-testid="select-opponent" className="select-opponent">
      <form onSubmit={handleSubmit}>
        <fieldset className="form-group">
          <legend>
            <h4>Choose your opponent</h4>
          </legend>
          {["Computer", "Human"].map(r => (
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
      </form>
    </div>
  );
}

SelectOpponent.propTypes = {
  selectOpponent: PropTypes.func
};

export default SelectOpponent;
