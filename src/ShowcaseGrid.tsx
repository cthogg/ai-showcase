import React, { useState } from "react";
import AIList from "./AIList";
import { FEAgent } from "./types";

interface ShowCaseGridProps {
  agents: FEAgent[];
}

const ShowCaseGrid: React.FunctionComponent<ShowCaseGridProps> = ({
  agents
}: ShowCaseGridProps): JSX.Element => {
  const [selectedAgents, setSelectedAgents] = useState<FEAgent[]>([]);
  const selectedAgentsList = () => {
    if (selectedAgents.length === 0) {
      return <p> nothing selected </p>;
    } else {
      return selectedAgents.map(a => (
        <React.Fragment key={a.id}>
          <p> {a.name}</p>
        </React.Fragment>
      ));
    }
  };

  return (
    <>
      <AIList agents={agents} selectFunction={setSelectedAgents} />
      {selectedAgentsList()}
    </>
  );
};

export default ShowCaseGrid;
