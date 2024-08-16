"use client";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  YAxis,
  XAxis,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Page A", pv: 2400 },
  { name: "Page B", pv: 2000 },
  { name: "Page C", pv: 2600 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height="50%">
      <LineChart
        width={900}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        style={{ fontSize: "12px" }}
      >
        <CartesianGrid strokeDasharray="1 1" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="linear"
          dataKey="pv"
          isAnimationActive={false}
          stroke="grey"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export { Chart };
