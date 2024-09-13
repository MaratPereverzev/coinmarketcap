import type { SxProps, TooltipProps as TooltipPropsMui } from "@mui/material";
import { Tooltip } from "@mui/material";
import React from "react";

type TooltipProps = TooltipPropsMui & {
  title?: string;
};

const Default = (props: TooltipProps): React.JSX.Element => {
  const { title, ...other } = props;

  return <Tooltip title={title} {...other} />;
};

export { Default as Tooltip };

