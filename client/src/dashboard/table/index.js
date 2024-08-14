import { Table } from "@components";
import { TableBody } from "./body";
import { TableHead } from "./head";
import { Foot } from "./foot";
import { useState } from "react";

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
        tableHeadData={<TableHead sort={sort} />}
        tableBodyData={<TableBody sort={sort} setSort={setSort} />}
      />
      <Foot />
    </>
  );
};

export { Default as Table };
