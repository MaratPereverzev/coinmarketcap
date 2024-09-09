import React from "react";
import type { sxProp } from "@/utils/types/components/sx";

type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> & {
  sx?: sxProp;
  items?: string | number | JSX.Element | React.JSX.Element;
  isHead?: boolean;
};

export type { TableRowProps };
