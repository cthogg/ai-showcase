import { BEAgent, FEAgent } from "./types";

export const beFeAgentParser = (beAgents: BEAgent[]): FEAgent[] => {
  const output = beAgents.map(
    (agent: BEAgent): FEAgent => ({
      statistics: {
        categories: [{ category: "memory", statistics: { averageMean: 123 } }]
      },
      ...agent
    })
  );
  return output;
};
