import React from "react";
import PlayerHand from "./components/PlayerHand";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Lets play rock, paper and scissors</header>
      <PlayerHand />
    </div>
  );
}

export default App;
