import { Tooltip } from "@mui/material";
import React from "react";
import type { TooltipProps } from "@/utils";

const Default = (props: TooltipProps): React.JSX.Element => {
  const { title, sx, ...other } = props;

  return <Tooltip title={title} sx={{ ...sx }} {...other} />;
};

export { Default as Tooltip };
