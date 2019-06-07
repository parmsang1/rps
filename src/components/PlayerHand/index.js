import React from "react";
import PropTypes from "prop-types";

function PlayerHand(props) {
  return (
    <div data-testid="player-hand" className="player-hand">
      <form>
        <fieldset>
          <legend>Choose your hand</legend>
          <label>
            Rock <input type="radio" name="radio1" value="Rock" />
          </label>
          <label>
            Paper <input type="radio" name="radio1" value="Paper" />
          </label>
          <label>
            Scissors <input type="radio" name="radio1" value="Scissors" />
          </label>
        </fieldset>
      </form>
    </div>
  );
}

PlayerHand.propTypes = {};

export default PlayerHand;
