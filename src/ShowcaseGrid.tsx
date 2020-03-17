import React, { useState } from "react";
import AIList from "./AIList";
import { FEAgent } from "./types";
import SelectedAgentsTable from "./SelectedAgentsTable";
import { mockSelectedAgents } from "./mocks/mockSelectedAgents";

interface ShowCaseGridProps {
  agents: FEAgent[];
}

const ShowCaseGrid: React.FunctionComponent<ShowCaseGridProps> = ({
  agents
}: ShowCaseGridProps): JSX.Element => {
  const [selectedAgents, setSelectedAgents] = useState<FEAgent[]>([]);
  console.log("selectedAgents", selectedAgents);
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
      {6 > 0 && (
        <SelectedAgentsTable agents={mockSelectedAgents}> </SelectedAgentsTable>
      )}
    </>
  );
};

export default ShowCaseGrid;
