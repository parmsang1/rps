import React, { useState } from "react";
import OpponentHand from "./components/OpponentHand";
import PlayerHand from "./components/PlayerHand";
import paperSvg from "./assets/paper.svg";
import { ReactComponent as Paper } from "./assets/paper.svg";
import { ReactComponent as Rock } from "./assets/rock.svg";
import { ReactComponent as Scissors } from "./assets/scissors.svg";

import "./App.css";

function App() {
  const [selectedHand, setValue] = useState("");
  const selectHand = hand => setValue(hand);
  const displayImage = () => {
    let image;
    switch (selectedHand) {
      case "Rock":
        image = <Rock />;
        break;
      case "Paper":
        image = <Paper fill="#fff" />;
        break;
      case "Scissors":
        image = <Scissors />;
        break;
      default:
        console.log("no hand selected");
    }
    return image;
  };
  return (
    <div className="App">
      <header className="App-header">Lets play rock, paper and scissors</header>
      <PlayerHand selectHand={selectHand} />
      <OpponentHand />
      <p data-testid="selected-hand">{selectedHand}</p>
      {selectedHand ? displayImage() : null}
    </div>
  );
}

export default App;
