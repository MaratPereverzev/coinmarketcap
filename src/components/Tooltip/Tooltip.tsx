import type { TooltipProps as TooltipPropsMui } from "@mui/material";
import { Tooltip } from "@mui/material";
import { JSX } from "react";

type TooltipProps = TooltipPropsMui & {
  title?: string;
};

const Default = ({ title, ...other }: TooltipProps): JSX.Element => {
  return <Tooltip title={title} {...other} />;
};

export { Default as Tooltip };

