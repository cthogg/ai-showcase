import React, { useState, useEffect } from "react";
import { listAgents } from "./mocks/apiService";
import AIList from "./AIList";
import { BEAgent, FEAgent } from "./types";
import { beFeAgentParser } from "./backendFrontendParser";

const TodoWrapper: React.FunctionComponent = (): JSX.Element => {
  const [agents, setAgents] = useState<FEAgent[]>([]);
  const [selectedAgents, setSelectedAgents] = useState<FEAgent[]>([]);

  const toggleSelected = (agent: FEAgent) => {
    if (selectedAgents.find(a => a.id === agent.id) !== undefined) {
      removeFromSelectedAgents(agent);
    }
    addToSelectedAgents(agent);
  };
  const addToSelectedAgents = (agent: FEAgent): void => {
    let newSelectedAgents = selectedAgents;
    newSelectedAgents.push(agent);
    // FIXME: ensure no duplicated
    setSelectedAgents(newSelectedAgents);
  };
  const removeFromSelectedAgents = (agent: FEAgent): void => {
    const newSelectedAgents = selectedAgents.filter(a => a.id === agent.id);
    setSelectedAgents(newSelectedAgents);
  };

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
  }, [selectedAgents]);

  return (
    <React.Fragment>
      <AIList agents={agents} selectFunction={toggleSelected} />
      {selectedAgents.map(a => (
        <p> {a.name}</p>
      ))}
    </React.Fragment>
  );
};

export default TodoWrapper;
