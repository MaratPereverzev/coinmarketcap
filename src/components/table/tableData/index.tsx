import React from 'react'
import type {TableDataProps} from "@/utils/types"

const TableData = (props: TableDataProps): React.JSX.Element => {
  const { sx, value, ...other } = props;

  return (
    <td style={{ ...sx }} {...other}>
      {value ?? other?.children}
    </td>
  );
};

export { TableData };
