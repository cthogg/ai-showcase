import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { FEAgent } from "./types";
interface AIListProps {
  agents: FEAgent[];
  selectFunction: Function;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  })
);

const AIList: React.FunctionComponent<AIListProps> = ({
  agents,
  selectFunction
}: AIListProps): JSX.Element => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    const getAgentsFromChecked = (checkedIds: number[]): FEAgent[] => {
      const checkedAgents: FEAgent[] = checkedIds
        .filter(c => c !== 0)
        .map(c => {
          console.log("c", c);
          //@ts-ignore
          const foundAgent: FEAgent = agents.find(a => a.id === c);
          return foundAgent;
        });
      return checkedAgents;
    };
    if (currentIndex === -1) {
      if (newChecked.length >= 3) {
        alert("please selected two or fewer to compare");
      } else {
        newChecked.push(value);
      }
    } else {
      newChecked.splice(currentIndex, 1);
    }
    selectFunction(getAgentsFromChecked(newChecked));
    setChecked(newChecked);
  };

  const createStatisticsFromAgent = (agent: FEAgent): string => {
    const categoryString: string = agent.statistics.categories
      .map(cat => {
        return `${cat.category}, ${cat.statistics.averageMean}`;
      })
      .join("");
    return categoryString;
  };

  return (
    <List className={classes.root}>
      {agents.map(agent => {
        const labelId = `checkbox-list-label-${agent.id}`;

        return (
          <ListItem
            key={agent.id}
            role={undefined}
            dense
            button
            onClick={handleToggle(agent.id)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(agent.id) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText
              id={labelId}
              primary={`${agent.name}`}
              secondary={`${agent.description}  ${createStatisticsFromAgent(
                agent
              )}`}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default AIList;
