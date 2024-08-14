import "./styles.css";
import { TableData } from "./tableData";
import { TableFoot } from "./tableFoot";
import { TableHead } from "./tableHead";
import { TableRow } from "./tableRow";

const Table = (props) => {
  const { tableHeadData, tableBodyData, tableFootData, sx, ...other } = props;
  return (
    <table className="tableContent" style={{ ...sx }} {...other}>
      {tableHeadData && (
        <thead style={{ width: "100%" }}>{tableHeadData}</thead>
      )}
      {tableBodyData && (
        <tbody style={{ width: "100%" }}>{tableBodyData}</tbody>
      )}
      {tableFootData && (
        <tfoot style={{ width: "100%" }}>{tableFootData}</tfoot>
      )}
    </table>
  );
};

export { Table, TableData, TableFoot, TableHead, TableRow };
