import React from "react";
import "./App.css";
import ApplicationBar from "./ApplicationBar";
import AIList from "./AIList";
import { AGENTS } from "./mocks/mockAgents";
import { beFeAgentParser } from "./backendFrontendParser";

function App() {
  const agents = beFeAgentParser(AGENTS);
  return (
    <div className="App">
      <ApplicationBar />
      <AIList agents={agents} />
    </div>
  );
}

export default App;
