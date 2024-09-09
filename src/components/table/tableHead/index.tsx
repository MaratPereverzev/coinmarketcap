import React from "react"
import type { TableHeadProps } from "@/utils/types";

const TableHead = (props: TableHeadProps): React.JSX.Element => {
  const { sx, value, ...other } = props;
  return (
    <th className="tableHead" style={{ fontSize: "12px", ...sx }} {...other}>
      {value ?? other?.children}
    </th>
  );
};

export { TableHead };
