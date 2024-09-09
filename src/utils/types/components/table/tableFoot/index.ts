import React from "react";
import type { sxProp } from "@/utils/types/components/sx";

type TableFootProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  sx?: sxProp;
  value?: string | number | JSX.Element | React.JSX.Element;
};

export type { TableFootProps };
