import type { sxProp } from "components/types";
import { JSX } from "react";

export type TableHeadProps = React.HTMLAttributes<HTMLTableCellElement> & {
  sx?: sxProp;
  value?: string | number | JSX.Element;
};

export const TableHead = ({ sx, value, ...other }: TableHeadProps): JSX.Element => {
  return (
    <th className="tableHead" style={{ fontSize: "12px", ...sx }} {...other}>
      {value ?? other?.children}
    </th>
  );
};
