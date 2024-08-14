import { Table } from "@components";
import { TableBody } from "./body";
import { TableHead } from "./head";
import { Foot } from "./foot";
import { useState } from "react";

const tableColumns = [
  { name: "", field: "" },
  { name: "Name", field: "name" },
  { name: "Symbol", field: "symbol" },
  { name: "Price", field: "priceUsd", direction: false },
  { name: "Market Cap.", field: "marketCapUsd", direction: false },
  { name: "Volume(24h)", field: "volumeUsd24Hr", direction: false },
];

const Default = (props) => {
  const [sort, setSort] = useState({ sort: "rank", direction: "down" });

  return (
    <>
      <Table
        sx={{
          fontWeight: "700",
          borderCollapse: "collapse",
          width: "100%",
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
    </>
  );
};

export { Default as Table };
