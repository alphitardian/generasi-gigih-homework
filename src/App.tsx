import React, { ReactElement } from "react";
import "./App.css";
import Router from "./router/router";

function App(): ReactElement {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
