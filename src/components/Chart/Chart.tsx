import type { Indexable } from "components/types";
import { JSX } from "react";
import type { LineProps } from "recharts";
import {
  CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis
} from "recharts";

type ChartProps = LineProps & {
  name?: string;
  value?: string;
  data?: Indexable;
};

export const Chart = (props: ChartProps): JSX.Element => {
  const { data, value, name } = props;
  return (
    <ResponsiveContainer width="100%" height="40%">
      <LineChart
        width={900}
        height={300}
        data={{...data}}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
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