import React from "react";
import type { LineProps } from "recharts";
import {
  CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis
} from "recharts";
import type {Indexable} from "../types"

type ChartProps = LineProps & {
  name?: string;
  value?: string;
  data?: Indexable;
};

const Chart = (props: ChartProps): React.JSX.Element => {
  const { data, value, name } = props;
  return (
    <ResponsiveContainer width="100%" height="40%">
      <LineChart
        width={900}
        height={300}
        data={{...data}}
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

