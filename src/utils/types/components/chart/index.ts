import { LineProps } from "recharts";
import type { Indexable } from "../../object";

type ChartProps = LineProps & {
  name?: string;
  value?: string;
  data?: Indexable;
};

export type { ChartProps };
