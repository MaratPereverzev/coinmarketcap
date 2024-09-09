import type { PopoverProps } from "@mui/material";
import type { BoxProps, ButtonProps } from "@/utils/types";
import { sxProp } from "../sx";

type Default = PopoverProps & {
  children?: React.JSX.Element[] | JSX.Element[];
  button?: React.JSX.Element | JSX.Element;
  closeOnClick?: boolean;
  sxPopover?: sxProp;
  sxButton?: sxProp;
  boxProps?: BoxProps;
  className?: String;
};

export type { Default as PopoverProps };
