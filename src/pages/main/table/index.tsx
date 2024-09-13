import { Table, Box } from "@/components";
import { TableBody } from "./body";
import { TableHead } from "./head";
import { Foot } from "./foot";
import { useState, useContext } from "react";
import { dataContext } from "@/context";
import React from "react"
import { sxProp } from "@/components/types";

type TableProps = {
  [index: string | symbol]: sxProp | undefined;
  sx?: sxProp;
  sxBox?: sxProp;
}

const Default = (props: TableProps): React.JSX.Element => {
  const { sx, sxBox } = props;
  const {tableColumns} = useContext(dataContext)!;

  const [sort, setSort] = useState<{
    field: string;
    direction?: boolean;
}>({ field: "rank", direction: false });

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
