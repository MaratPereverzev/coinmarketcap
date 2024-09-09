import "./styles.css";
import React from "react";
import { TableData } from "./tableData";
import { TableFoot } from "./tableFoot";
import { TableHead } from "./tableHead";
import { TableRow } from "./tableRow";
import { TableProps } from "@/utils";

const Table = (props: TableProps): React.JSX.Element => {
  const { tableHeadData, tableBodyData, tableFootData, sx, ...other } = props;
  return (
    <table className="tableContent" style={{ ...sx }} {...other}>
      {tableHeadData && <thead>{tableHeadData}</thead>}
      {tableBodyData && <tbody>{tableBodyData}</tbody>}
      {tableFootData && <tfoot>{tableFootData}</tfoot>}
    </table>
  );
};

export { Table, TableData, TableFoot, TableHead, TableRow };
