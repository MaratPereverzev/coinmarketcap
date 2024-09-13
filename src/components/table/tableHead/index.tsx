import React from "react"
import type { sxProp } from "../../types";

type TableHeadProps = React.HTMLAttributes<HTMLTableCellElement> & {
  sx?: sxProp;
  value?: string | number | JSX.Element | React.JSX.Element;
};

const TableHead = (props: TableHeadProps): React.JSX.Element => {
  const { sx, value, ...other } = props;
  return (
    <th className="tableHead" style={{ fontSize: "12px", ...sx }} {...other}>
      {value ?? other?.children}
    </th>
  );
};

export { TableHead };
