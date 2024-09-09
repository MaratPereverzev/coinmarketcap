import type { TooltipProps, SxProps } from "@mui/material";

type Default = TooltipProps & {
  sx?: SxProps;
  title?: string;
};

export type { Default as TooltipProps };
