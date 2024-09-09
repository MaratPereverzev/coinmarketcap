import React from "react";
import type { sxProp } from "../sx";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  sx?: sxProp;
  caption?: string;
  sxText?: sxProp;
  sxBox?: sxProp;
  sxIcon?: sxProp;
  variant?: string;
  icon?: string;
  iconAtTheEnd?: boolean;
  templateColumns?: string;
};

export type { ButtonProps };
