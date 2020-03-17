import { BEAgent, FEAgent, CategoryStatistic } from "./types";

// list all categories
// for each of these categories find all of the tasks in it
// average all of these tasks from the categories
//

// FIXME: convert cateogry names into enums
export const findCategoryAverageMeanFromAgent = (
  agent: BEAgent,
  category: "memory" | "planning" | "logic"
): number => {
  const tasksFromAgentWithCategory = agent.tasks.filter(
    task => task.category === category
  );
  const addArray = (a: number, b: number) => a + b;
  const taskScores = tasksFromAgentWithCategory.map(t => t.score);
  const scoresTotal = taskScores.reduce(addArray, 0);
  const averageScore = scoresTotal / tasksFromAgentWithCategory.length;
  return averageScore;
};
//FIXME: remove ts-ignores
export const allCategories = ["memory", "planning", "logic"];
const createCategoriesFromAgent = (agent: BEAgent): CategoryStatistic[] => {
  return allCategories.map(
    (catName: string): CategoryStatistic => {
      return {
        //@ts-ignore
        category: catName,
        statistics: {
          //@ts-ignore
          averageMean: findCategoryAverageMeanFromAgent(agent, catName)
        }
      };
    }
  );
};
export const beFeAgentParser = (beAgents: BEAgent[]): FEAgent[] => {
  const output = beAgents.map(
    (agent: BEAgent): FEAgent => ({
      statistics: {
        categories: createCategoriesFromAgent(agent)
      },
      ...agent
    })
  );
  return output;
};
