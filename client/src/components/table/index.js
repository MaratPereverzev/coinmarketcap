import "./styles.css";
import { TableHead } from "./tableHead";
import { TableData } from "./tableData";
import { TableRow } from "./tableRow";

const Table = (props) => {
  const { tableHeadData, tableBodyData, tableFootData, sx, ...other } = props;
  return (
    <table className="tableContent" style={{ ...sx }} {...other}>
      {tableHeadData && <thead>{tableHeadData}</thead>}
      {tableBodyData && <tbody>{tableBodyData}</tbody>}
      {tableFootData && <tfoot>{tableFootData}</tfoot>}
    </table>
  );
};

export { Table, TableHead, TableData, TableRow };
