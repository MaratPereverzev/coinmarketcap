import "./styles.css";
import { TableHead } from "./tableHead";
import { TableData } from "./tableData";
import { TableRow } from "./tableRow";

const Table = (props) => {
  const { tableHeadData, tableBodyData, tableFootData, sx } = props;
  return (
    <table className="tableContent" style={{ ...sx }}>
      {tableHeadData && <thead>{tableHeadData}</thead>}
      {tableBodyData && <tbody>{tableBodyData}</tbody>}
      {tableFootData && <tfoot>{tableFootData}</tfoot>}
    </table>
  );
};

export { Table, TableHead, TableData, TableRow };
