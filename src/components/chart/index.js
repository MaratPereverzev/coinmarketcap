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

const Chart = (props) => {
  const { data, value, name } = props;
  return (
    <ResponsiveContainer width="100%" height="40%">
      <LineChart
        width={900}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        style={{ fontSize: "12px" }}
      >
        <CartesianGrid strokeDasharray="1 1" vertical={false} />
        <XAxis dataKey={name} />
        <YAxis />
        <Tooltip />
        <Line
          type="linear"
          dataKey={value}
          dot={false}
          isAnimationActive={false}
          stroke="grey"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export { Chart };
