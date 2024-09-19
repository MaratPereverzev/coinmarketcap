import type { sxProp } from "components/types";
import React from "react";
import "./styles.css";

type TableProps = React.HTMLAttributes<HTMLTableElement> & {
  sx?: sxProp;
  tableHeadData?: JSX.Element;
  tableBodyData?: JSX.Element;
  tableFootData?: JSX.Element;
};

export const Table = ({ 
  tableHeadData, 
  tableBodyData, 
  tableFootData, 
  sx, 
  ...other }: TableProps): React.JSX.Element => {
  return (
    <table className="tableContent" style={{ ...sx }} {...other}>
      {tableHeadData && <thead>{tableHeadData}</thead>}
      {tableBodyData && <tbody>{tableBodyData}</tbody>}
      {tableFootData && <tfoot>{tableFootData}</tfoot>}
    </table>
  );
};
