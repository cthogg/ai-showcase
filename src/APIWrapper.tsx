import React, { useState, useEffect } from "react";
import { listAgents } from "./mocks/apiService";
import { BEAgent, FEAgent } from "./types";
import { beFeAgentParser } from "./backendFrontendParser";
import ShowCaseGrid from "./ShowcaseGrid";

const TodoWrapper: React.FunctionComponent = (): JSX.Element => {
  const [agents, setAgents] = useState<FEAgent[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      //TODO: add loading spinner
      try {
        const result = await listAgents();
        if (result === []) {
          setAgents([]);
        } else {
          const convertedResult: BEAgent[] = result.map(r => r);
          setAgents(beFeAgentParser(convertedResult));
        }
      } catch (error) {
        //TODO: make this alert within the ui
        alert(error);
      }
    };
    fetchTodos();
  }, []);
  return (
    <React.Fragment>
      <ShowCaseGrid agents={agents} />
    </React.Fragment>
  );
};

export default TodoWrapper;
