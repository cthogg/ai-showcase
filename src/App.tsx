import React from "react";
import ApplicationBar from "./ApplicationBar";
import APIWrapper from "./APIWrapper";

function App() {
  return (
    <div className="App">
      <ApplicationBar />
      <APIWrapper></APIWrapper>
    </div>
  );
}

export default App;
