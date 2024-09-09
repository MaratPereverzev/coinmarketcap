import React from "react"
import type {TableFootProps} from "@/utils/types"

const TableFoot = (props: TableFootProps):React.JSX.Element => {
  const { sx, value, ...other } = props;
  return (
    <tfoot className="tableFoot" style={{ fontSize: "12px", ...sx }} {...other}>
      {value ?? other?.children}
    </tfoot>
  );
};

export { TableFoot };
