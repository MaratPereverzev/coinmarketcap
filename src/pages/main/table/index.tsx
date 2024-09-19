import { Box, Table as TableComponent} from "components";
import { sxProp } from "components/types";
import { dataContext } from "context";
import { JSX, useContext, useState } from "react";
import { TableBody } from "./body";
import { TableFoot } from "./foot";
import { TableHead } from "./head";

type TableProps = {
  [index: string | symbol]: sxProp | undefined;
  sx?: sxProp;
  sxBox?: sxProp;
}

export const Table = (props: TableProps): JSX.Element => {
  const { sx, sxBox } = props;
  const {tableColumns} = useContext(dataContext)!;

  const [sort, setSort] = useState<{
    field: string;
    direction?: boolean;
}>({ field: "rank", direction: false });

  return (
    <Box flex column center sx={{ ...sxBox }}>
      <TableComponent
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
      <TableFoot />
    </Box>
  );
};

