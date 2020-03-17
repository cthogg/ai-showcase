import React from "react";
import ApplicationBar from "./components/ApplicationBar";
import APIWrapper from "./components/APIWrapper";

function App() {
  return (
    <div className="App">
      <ApplicationBar />
      <APIWrapper></APIWrapper>
    </div>
  );
}

export default App;
