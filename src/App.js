import React, { useState } from "react";
import OpponentHand from "./components/OpponentHand";
import PlayerHand from "./components/PlayerHand";
import HandImage from "./components/HandImage";
import SelectOpponent from "./components/SelectOpponent";
import "./App.css";

function App() {
  const [selectedHand, setValue] = useState("");
  const [selectedOpponent, setOpponent] = useState("");
  const selectHand = hand => setValue(hand);
  const selectOpponent = opponent => {
    setValue("");
    setOpponent(opponent);
  };

  return (
    <div className="App">
      <header className="App-header">Lets play rock, paper and scissors</header>
      <SelectOpponent selectOpponent={selectOpponent} />
      <PlayerHand selectHand={selectHand} />
      <OpponentHand />
      <p data-testid="selected-hand">{selectedHand}</p>
      {selectedHand ? (
        <HandImage selectedHand={selectedHand} fill={"lightblue"} />
      ) : null}
    </div>
  );
}

export default App;
