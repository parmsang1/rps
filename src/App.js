import React, { useState } from "react";
import OpponentHand from "./components/OpponentHand";
import PlayerHand from "./components/PlayerHand";
import HandImage from "./components/HandImage";
import SelectOpponent from "./components/SelectOpponent";
import GameEngine from "./components/GameEngine";
import "./App.css";

function App() {
  const [selectedHand, setValue] = useState("");
  const [selectedOpponent, setOpponent] = useState("");
  const hands = ["Rock", "Paper", "Scissors"];
  const selectHand = hand => setValue(hand);
  const selectOpponent = opponent => {
    setValue("");
    setOpponent(opponent);
  };

  const computerHand = hands[Math.floor(Math.random() * hands.length)];
  return (
    <div className="App">
      <header className="App-header">Lets play rock, paper and scissors</header>
      <SelectOpponent selectOpponent={selectOpponent} />
      <PlayerHand selectHand={selectHand} />
      <OpponentHand />
      <p data-testid="selected-hand">{selectedHand}</p>
      {selectedHand ? (
        <>
          <HandImage selectedHand={selectedHand} fill={"lightblue"} />
          <GameEngine playerHand={selectedHand} opponentHand={computerHand} />
        </>
      ) : null}
    </div>
  );
}

export default App;
