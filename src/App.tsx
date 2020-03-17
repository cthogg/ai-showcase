import React from "react";
import "./App.css";
import ApplicationBar from "./ApplicationBar";
import AIList from "./AIList";
import { AGENTS } from "./mocks/mockAgents";

function App() {
  return (
    <div className="App">
      <ApplicationBar />
      <AIList agents={AGENTS} />
    </div>
  );
}

export default App;
