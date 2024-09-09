import React from "react";
import type { sxProp } from "../sx";

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  sx?: sxProp;
  caption?: string | number;
};

export type { TextProps };
