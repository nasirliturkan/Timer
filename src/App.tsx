import React from "react";

import TimeHeaderContainer from "./components/timeHeader";
import ActivateButtonContainer from "./components/activateButtons";
import ResetButtonContainer from "./components/resetButton";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <TimeHeaderContainer />
      <ActivateButtonContainer />
      <ResetButtonContainer />
    </div>
  );
};

export default App;
