import React from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesActions";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
