import { Table, Box } from "@components";
import { TableBody } from "./body";
import { TableHead } from "./head";
import { Foot } from "./foot";
import { useState, useContext } from "react";
import { dataContext } from "@context";
/*
const tableColumns = [
  { name: "", field: "" },
  { name: "#", field: "rank", direction: true },
  { name: "Name", field: "name" },
  { name: "Symbol", field: "symbol" },
  { name: "Price", field: "priceUsd", direction: true },
  { name: "Market Cap.", field: "marketCapUsd", direction: true },
  { name: "Volume(24h)", field: "volumeUsd24Hr", direction: true },
];
*/

const Default = (props) => {
  const { sx, sxBox } = props;
  const { tableColumns } = useContext(dataContext);

  const [sort, setSort] = useState({ sort: "rank", direction: "down" });

  return (
    <Box flex column center sx={{ ...sxBox }}>
      <Table
        sx={{
          backgroundColor: "white",
          fontWeight: "700",
          borderCollapse: "collapse",
          width: "100%",
          ...sx,
        }}
        tableHeadData={<TableHead sort={sort} tableColumns={tableColumns} />}
        tableBodyData={
          <TableBody
            sort={sort}
            setSort={setSort}
            tableColumns={tableColumns}
          />
        }
      />
      <Foot />
    </Box>
  );
};

export { Default as Table };
