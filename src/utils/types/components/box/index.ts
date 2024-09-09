import React from "react";
import type { sxProp } from "../sx";

type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
  sx?: sxProp;
  flex?: boolean;
  column?: boolean;
  wrap?: boolean;
  jc?: string | boolean;
  ai?: string | boolean;
  gap?: string | boolean | number;
  grow?: number | boolean;
  center?: boolean;
  grid?: boolean;
  columnWidth?: string;
  rowWidth?: string;
  gridFlow?: string;
  gridTemplate?: string;
  templateColumns?: string;
};

export type { BoxProps };
