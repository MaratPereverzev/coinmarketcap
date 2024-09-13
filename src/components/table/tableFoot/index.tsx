import React from "react"
import type {sxProp} from "../../types"

type TableFootProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  sx?: sxProp;
  value?: string | number | JSX.Element | React.JSX.Element;
};

const TableFoot = (props: TableFootProps):React.JSX.Element => {
  const { sx, value, ...other } = props;
  return (
    <tfoot className="tableFoot" style={{ fontSize: "12px", ...sx }} {...other}>
      {value ?? other?.children}
    </tfoot>
  );
};

export { TableFoot };
