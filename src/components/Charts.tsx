import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { Grid, Typography } from "@material-ui/core";
interface MyRadarChartProps {
  name?: string;
}

const colorOne = "#3f51b5";
const colorTwo = "#f50057";

const data = [
  {
    subject: "Memory",
    A: 50,
    B: 70,
    fullMark: 100
  },
  {
    subject: "Planning",
    A: 70,
    B: 80,
    fullMark: 100
  },
  {
    subject: "Logic",
    A: 86,
    B: 10,
    fullMark: 100
  }
];

const MyRadarChart: React.FunctionComponent<MyRadarChartProps> = ({
  name
}: MyRadarChartProps): JSX.Element => {
  return (
    <>
      <Typography> Note: Charts Use hard coded data </Typography>
      <Grid container>
        <Grid item>
          <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name="Impala"
              dataKey="A"
              fill={colorOne}
              fillOpacity={0.6}
            />
            <Radar
              name="AlphaZero"
              dataKey="B"
              fill={colorTwo}
              fillOpacity={0.6}
            />
            <Legend />
          </RadarChart>
        </Grid>
        <Grid item>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar name="Impala" dataKey="A" fill={colorOne} />
            <Bar name="AlphaZero" dataKey="B" fill={colorTwo} />
          </BarChart>
        </Grid>
      </Grid>
    </>
  );
};

export default MyRadarChart;
