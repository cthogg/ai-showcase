import React, { useState, useEffect } from "react";
import { listAgents } from "./mocks/apiService";
import AIList from "./AIList";
import { BEAgent } from "./types";
import { beFeAgentParser } from "./backendFrontendParser";

const TodoWrapper: React.FunctionComponent = (): JSX.Element => {
  const [agents, setAgents] = useState<BEAgent[]>([]);
  console.log("bob");
  useEffect(() => {
    const fetchTodos = async () => {
      //TODO: add loading spinner
      console.log("here");
      try {
        console.log("here");
        const result = await listAgents();
        console.log("result", result);
        if (result === []) {
          setAgents([]);
        } else {
          const convertedResult: BEAgent[] = result.map(r => r);
          setAgents(convertedResult);
        }
      } catch (error) {
        //TODO: make this alert within the things
        alert(error);
      }
    };
    fetchTodos();
  }, []);

  return (
    <React.Fragment>
      <AIList agents={beFeAgentParser(agents)} />
    </React.Fragment>
  );
};

export default TodoWrapper;
