import React, { useState } from "react";
import PlayerHand from "./components/PlayerHand";
import SelectOpponent from "./components/SelectOpponent";
import ComputerOpponent from "./components/ComputerOpponent";
import HumanOpponent from "./components/HumanOpponent";
import HandImage from "./components/HandImage";
import "./App.css";

function App() {
  const [selectedHand, setValue] = useState("");
  const [selectedOpponent, setOpponent] = useState("Computer");
  const selectHand = hand => setValue(hand);
  const selectOpponent = opponent => {
    setValue("");
    setOpponent(opponent);
  };

  return (
    <div className="App">
      <header className="App-header">Lets play rock, paper and scissors</header>
      <SelectOpponent selectOpponent={selectOpponent} />
      <PlayerHand player={"Player1"} selectHand={selectHand} />
      <HandImage selectedHand={selectedHand} fill={"lightgreen"} />
      <p data-testid="selected-hand">{selectedHand}</p>
      {selectedOpponent === "Computer" ? (
        <ComputerOpponent selectedHand={selectedHand} />
      ) : (
        <HumanOpponent playerOneHand={selectedHand} />
      )}
    </div>
  );
}

export default App;
