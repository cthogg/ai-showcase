// I find separating the backend from frontend types are useful if they are kept in separate repositories
type AgentId = number;

export interface BEAgent {
  readonly id: AgentId;
  readonly name: string;
  readonly description: string;
  readonly tasks: FETask[];
}

export interface Statistics {
  averageMean: number;
}

export interface CategoryStatistic {
  category: "memory" | "planning" | "logic";
  statistics: Statistics;
}

export interface FEAgent {
  id: AgentId;
  name: string;
  description: string;
  tasks: FETask[];
  statistics: {
    categories: CategoryStatistic[];
  };
}

export interface FETask {
  readonly id: string;
  readonly name: string;
  readonly category: "memory" | "planning" | "logic";
  readonly score: number;
}
