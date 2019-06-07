import React, { useState } from "react";
import OpponentHand from "./components/OpponentHand";
import PlayerHand from "./components/PlayerHand";
import HandImage from "./components/HandImage";

import "./App.css";

function App() {
  const [selectedHand, setValue] = useState("");
  const selectHand = hand => setValue(hand);

  return (
    <div className="App">
      <header className="App-header">Lets play rock, paper and scissors</header>
      <PlayerHand selectHand={selectHand} />
      <OpponentHand />
      <p data-testid="selected-hand">{selectedHand}</p>
      {selectedHand ? <HandImage selectedHand={selectedHand} /> : null}
    </div>
  );
}

export default App;
