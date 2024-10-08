import { Box, Button, Icon, TableRow } from "components";
import type { Indexable } from "components/types";
import React from "react";
import { dispatchEvent } from "utils";

type HeadProps = {
  sort: Indexable & {
    field: string;
    direction?: boolean;
},
  tableColumns: Indexable
}
export const TableHead = ({ sort, tableColumns }: HeadProps): React.JSX.Element => {
  return (
    <TableRow
      items={tableColumns.map((item: Indexable) => {
        if (
          item.field !== sort.field &&
          item.direction !== undefined &&
          item.direction !== null
        ) {
          item.direction = true;
        }
        return (
          <Box flex center>
            <Icon
              icon={item.direction === true ? "arrowDown" : "arrowUp"}
              sx={{ opacity: item.field === sort.field ? 1 : 0 }}
            />
            <Button
              caption={item.name}
              variant="text"
              sxText={{
                fontWeight: "900",
                margin: 0,
                color: sort?.sort === item.field && "#3861fb",
              }}
              onClick={() => {
                if (item?.direction !== null && item.direction !== undefined) {
                  dispatchEvent("sortData", {
                    sort: item.field,
                    direction: item.direction,
                  });
                  item.direction = !item.direction;
                }
              }}
            />
          </Box>
        );
      })}
      isHead
      sx={{
        textAlign: "start",
        position: "sticky",
        top: "0px",
        overflow: "hidden",
        backgroundColor: "white",
        height: "50px",
      }}
    />
  );
};

