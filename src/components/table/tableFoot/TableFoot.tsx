import type { sxProp } from "components/types";
import {JSX} from "react";

export type TableFootProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  sx?: sxProp;
  value?: string | number | JSX.Element;
};

export const TableFoot = ({ sx, value, ...other }: TableFootProps): JSX.Element => {
  return (
    <tfoot className="tableFoot" style={{ fontSize: "12px", ...sx }} {...other}>
      {value ?? other?.children}
    </tfoot>
  );
};
