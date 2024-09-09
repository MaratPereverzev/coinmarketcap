import React from "react";
import type { sxProp } from "../sx";

type ChipProps = React.HTMLAttributes<HTMLParagraphElement> & {
  sx?: sxProp;
  caption: string;
};

export type { ChipProps };
