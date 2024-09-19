import {JSX} from "react";
import type { sxProp } from "components/types";

export type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
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

export const Box = ({
  sx = {},
  flex,
  column,
  wrap,
  jc,
  ai,
  gap,
  grow,
  center,
  grid,
  columnWidth,
  rowWidth,
  gridFlow,
  gridTemplate,
  templateColumns,
  ...other
}: BoxProps): JSX.Element => {

  if (flex && grid) throw new Error("flex && grid display at the same time");

  if (flex) {
    sx.display = "flex";
    sx.flexDirection = column ? "column" : "row";

    if (wrap) sx.flexWrap = "wrap";
    if (jc) sx.justifyContent = typeof jc === "boolean" ? "center" : jc;
    if (ai) sx.alignItems = typeof ai === "boolean" ? "center" : jc;
    if (center) {
      sx.justifyContent = "center";
      sx.alignItems = "center";
    }
    if (gap) sx.gap = typeof gap === "boolean" ? "10px" : gap;
    if (grow) sx.flexGrow = typeof grow === "boolean" ? 1 : grow;
  }

  if (grid) {
    sx.display = "grid";
    if (columnWidth)
      sx.gridAutoColumns = typeof columnWidth === "boolean" ? 1 : columnWidth;
    if (rowWidth)
      sx.gridAutoRows = typeof rowWidth === "boolean" ? 1 : rowWidth;
    if (gridFlow)
      sx.gridAutoFlow = typeof gridFlow === "boolean" ? "row" : gridFlow;
    if (templateColumns) sx.gridTemplateColumns = templateColumns;
    if (gridTemplate) sx.gridTemplate = gridTemplate;
    if (gap) sx.gap = typeof gap === "boolean" ? "10px" : gap;
  }
  return <div style={sx}  {...other} />;
};
