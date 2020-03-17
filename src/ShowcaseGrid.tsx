import React, { useState } from "react";
import AIList from "./AIList";
import { FEAgent } from "./types";
import SelectedAgentsTable from "./SelectedAgentsTable";
import { Grid } from "@material-ui/core";

interface ShowCaseGridProps {
  agents: FEAgent[];
}

const ShowCaseGrid: React.FunctionComponent<ShowCaseGridProps> = ({
  agents
}: ShowCaseGridProps): JSX.Element => {
  const [selectedAgents, setSelectedAgents] = useState<FEAgent[]>([]);

  return (
    <>
      <Grid container>
        <Grid item xs={4}>
          <AIList agents={agents} selectFunction={setSelectedAgents} />
        </Grid>
        <Grid item>
          {selectedAgents.length > 0 && (
            <SelectedAgentsTable agents={selectedAgents}> </SelectedAgentsTable>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ShowCaseGrid;
