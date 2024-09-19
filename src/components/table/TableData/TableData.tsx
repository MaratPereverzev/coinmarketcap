import type { sxProp } from "components/types";
import { JSX } from 'react';

export type TableDataProps = React.HTMLAttributes<HTMLTableCellElement> & {
  sx?: sxProp;
  value?: string | number | JSX.Element;
};

export const TableData = ({ sx, value, ...other }: TableDataProps): JSX.Element => {
  return (
    <td style={{ ...sx }} {...other}>
      {value ?? other?.children}
    </td>
  );
};
