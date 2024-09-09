import React from "react";
import type { sxProp } from "@/utils/types/components/sx";

type TableProps = React.HTMLAttributes<HTMLTableElement> & {
  sx?: sxProp;
  tableHeadData?: React.JSX.Element | JSX.Element;
  tableBodyData?: React.JSX.Element | JSX.Element;
  tableFootData?: React.JSX.Element | JSX.Element;
};

export type { TableProps };
