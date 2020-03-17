import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { FEAgent } from "./types";
import { allCategories } from "./backendFrontendParser";
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

interface SelectedAgentsTableProps {
  agents: FEAgent[];
}

const categoryHeaders = allCategories.map(c => (
  <TableCell key={c} align="right">
    {c} Average
  </TableCell>
));
// FIXME: this needs to be repeated when another measure is added
const categoryAverage = (row: FEAgent, allCategories: string[]) =>
  allCategories.map(c => {
    // Find the category
    const statsForCategory = row.statistics.categories.find(
      rowForCategory => rowForCategory.category === c
    );
    // escapte the category
    return (
      <TableCell key={c} align="right">
        {statsForCategory?.statistics.averageMean}
      </TableCell>
    );
  });
// TODO: create row categories

const SelectedAgentsTable: React.FunctionComponent<SelectedAgentsTableProps> = ({
  agents
}: SelectedAgentsTableProps): JSX.Element => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            {categoryHeaders}
          </TableRow>
        </TableHead>
        <TableBody>
          {agents.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {categoryAverage(row, allCategories)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SelectedAgentsTable;
