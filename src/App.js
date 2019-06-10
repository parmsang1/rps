import React, { useState } from "react";
import PlayerHand from "./components/PlayerHand";
import SelectOpponent from "./components/SelectOpponent";
import ComputerOpponent from "./components/ComputerOpponent";
import HumanOpponent from "./components/HumanOpponent";
import HandImage from "./components/HandImage";
import GameEngine from "./components/GameEngine";
import "./App.css";

function App() {
  const [selectedHand, setValue] = useState("");
  const [opponentHand, setOpponentHand] = useState("");
  const [selectedOpponent, setOpponent] = useState("Computer");
  const [resetKey, setResetKey] = useState(1);
  const selectHand = hand => setValue(hand);
  const selectOpponent = opponent => {
    setValue("");
    setOpponent(opponent);
  };
  const updateOpponentHand = hand => {
    setOpponentHand(hand);
  };

  const reset = () => {
    setValue("");
    setOpponentHand("");
    setResetKey(resetKey + 1);
  };

  const lookAwayMessage = selectedHand ? (
    <p>Player 1 look away from screen!</p>
  ) : (
    <p>Player 2 look away from screen!</p>
  );

  return (
    <div className="App container-fluid h-100 ">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="container" key={resetKey}>
          <header className="App-header ">
            <h1>Lets play rock, paper and scissors</h1>
          </header>
          <SelectOpponent selectOpponent={selectOpponent} />
          {selectedOpponent === "Human" && !opponentHand
            ? lookAwayMessage
            : null}
          <div className="row">
            <div
              className="col-6"
              style={{
                visibility: selectedHand && !opponentHand ? "hidden" : "visible"
              }}
            >
              <PlayerHand player={"Player1"} selectHand={selectHand} />
              <HandImage selectedHand={selectedHand} fill={"lightgreen"} />
              {selectedHand && (
                <p data-testid="selected-hand">{`Player1 picks ${selectedHand}`}</p>
              )}
            </div>
            {selectedOpponent === "Computer" ? (
              <ComputerOpponent
                selectedHand={selectedHand}
                updateOpponentHand={updateOpponentHand}
              />
            ) : (
              <HumanOpponent
                playerOneHand={selectedHand}
                updateOpponentHand={updateOpponentHand}
              />
            )}
          </div>
          <GameEngine playerHand={selectedHand} opponentHand={opponentHand} />
          <button
            className="btn btn-secondary"
            onClick={reset}
            style={{ marginTop: "15px" }}
          >
            Reset game
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
