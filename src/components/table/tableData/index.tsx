import React from 'react';
import type {sxProp} from "../../types"

type TableDataProps = React.HTMLAttributes<HTMLTableCellElement> & {
  sx?: sxProp;
  value?: string | number | JSX.Element | React.JSX.Element;
};

const TableData = (props: TableDataProps): React.JSX.Element => {
  const { sx, value, ...other } = props;

  return (
    <td style={{ ...sx }} {...other}>
      {value ?? other?.children}
    </td>
  );
};

export { TableData };
