import React from "react";

import "./App.css";
import Display from "./display/Display";
import Dashboard from "./dashboard/Dashboard";

class App extends Component {
  state = {
    display: null,
    dashboard: [{}]
  };

  render() {
    return (
    <div className="App">
      <h2>PLAY BALL!</h2>
    </div>
    <Display  />
    <Dashboard />
    );
  }
}

export default App;
