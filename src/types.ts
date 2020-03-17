// I find separating the backend from frontend types are useful if they are kept in separate repositories
type AgentId = number;

export interface Agent {
  readonly id: AgentId;
  readonly name: string;
  readonly description: string;
  readonly tasks: Task[];
}

export interface Task {
  readonly id: string;
  readonly name: string;
  readonly category: "memory" | "planning" | "logic";
  readonly score: number;
}
