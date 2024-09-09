import React from "react";
import type { sxProp } from "@/utils/types/components/sx";

type TableDataProps = React.HTMLAttributes<HTMLTableCellElement> & {
  sx?: sxProp;
  value?: string | number | JSX.Element | React.JSX.Element;
};

export type { TableDataProps };
