import "./styles.css";
import { TableData } from "./tableData";
import { TableFoot } from "./tableFoot";
import { TableHead } from "./tableHead";
import { TableRow } from "./tableRow";
import "./styles.css";

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

export { Table, TableData, TableFoot, TableHead, TableRow };
