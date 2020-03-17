import React from "react";
import renderer from "react-test-renderer";
import ShowCaseGrid from "../components/ShowcaseGrid";
import { mockSelectedAgents } from "../mocks/agents";
import SelectedAgentsTable from "../components/SelectedAgentsTable";

it("renders multiple questions correctly", () => {
  const tree = renderer
    .create(<ShowCaseGrid agents={mockSelectedAgents} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders agents table correctly", () => {
  const tree = renderer
    .create(<SelectedAgentsTable agents={mockSelectedAgents} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
