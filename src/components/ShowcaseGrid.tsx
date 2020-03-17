import React, { useState } from "react";
import AgentList from "./AgentList";
import { FEAgent } from "../types";
import SelectedAgentsTable from "./SelectedAgentsTable";
import { Grid } from "@material-ui/core";
import MyRadarChart from "./Charts";

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
          <AgentList agents={agents} selectFunction={setSelectedAgents} />
        </Grid>
        <Grid item>
          {selectedAgents.length > 0 && (
            <>
              <SelectedAgentsTable
                agents={selectedAgents}
              ></SelectedAgentsTable>
              <MyRadarChart />
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ShowCaseGrid;
