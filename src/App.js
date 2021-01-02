import React from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesActions";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
