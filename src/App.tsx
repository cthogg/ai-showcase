import React from "react";
import "./App.css";
import ApplicationBar from "./ApplicationBar";
import AIList from "./AIList";
import { AGENTS } from "./mocks/mockAgents";
import { beFeAgentParser } from "./backendFrontendParser";
import TodoWrapper from "./APIWrapper";

function App() {
  const agents = beFeAgentParser(AGENTS);
  console.log("bob");

  return (
    <div className="App">
      <ApplicationBar />
      <TodoWrapper></TodoWrapper>
    </div>
  );
}

export default App;
