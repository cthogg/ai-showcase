import { FEAgent } from "../types";

export const mockSelectedAgents: FEAgent[] = [
  {
    statistics: {
      categories: [
        {
          category: "memory",
          statistics: {
            averageMean: 33
          }
        },
        {
          category: "planning",
          statistics: {
            averageMean: 100
          }
        },
        {
          category: "logic",
          statistics: {
            averageMean: 86
          }
        }
      ]
    },
    id: 2,
    name: "AlphaZero",
    description:
      "Generalisation of AlphaGo Zero that can achieve, tabula rasa, superhuman performance in many challenging domains such as Chess, Shogi and Go.",
    tasks: [
      {
        id: "mem_1",
        name: "Blackjack",
        category: "memory",
        score: 37
      },
      {
        id: "mem_2",
        name: "Q-bert",
        category: "memory",
        score: 29
      },
      {
        id: "logic_1",
        name: "Breakout",
        category: "logic",
        score: 78
      },
      {
        id: "logic_2",
        name: "Tetris",
        category: "logic",
        score: 92
      },
      {
        id: "logic_3",
        name: "Basic Math",
        category: "logic",
        score: 88
      },
      {
        id: "planning_1",
        name: "Pacman",
        category: "planning",
        score: 100
      }
    ]
  },
  {
    statistics: {
      categories: [
        {
          category: "memory",
          statistics: {
            averageMean: 79
          }
        },
        {
          category: "planning",
          statistics: {
            averageMean: 72
          }
        },
        {
          category: "logic",
          statistics: {
            averageMean: 32.666666666666664
          }
        }
      ]
    },
    id: 3,
    name: "R2D3",
    description:
      "Making Efficient Use of Demonstrations to Solve Hard Exploration Problems.",
    tasks: [
      {
        id: "mem_1",
        name: "Blackjack",
        category: "memory",
        score: 85
      },
      {
        id: "mem_2",
        name: "Q-bert",
        category: "memory",
        score: 73
      },
      {
        id: "logic_1",
        name: "Breakout",
        category: "logic",
        score: 28
      },
      {
        id: "logic_2",
        name: "Tetris",
        category: "logic",
        score: 26
      },
      {
        id: "logic_3",
        name: "Basic Math",
        category: "logic",
        score: 44
      },
      {
        id: "planning_1",
        name: "Pacman",
        category: "planning",
        score: 72
      }
    ]
  }
];
