import { Box, Button, Pagination, Popover, Text } from "@/components";
import { dataContext } from "@/context";
import { dispatchEvent } from "@/utils";
import React, { useContext } from "react";

const itemsPerPageArr = [100, 50, 25];

const Default = ():React.JSX.Element => {
  const { itemsPerPage, setItemsPerPage } = useContext(dataContext)!;

  return (
    <Box className="tableFoot" flex jc ai sx={{ width: "100%" }}>
      <Pagination
        count={2000 / itemsPerPage}
        shape="rounded"
        sx={{
          ".MuiPaginationItem-root": {
            fontWeight: "700",
            fontSize: "14px",
            borderRadius: 2,
          },
        }}
        onChange={(e, page) => {
          dispatchEvent("queryChange", { offset: (page - 1) * 100 });
        }}
      />
      <Box flex gap jc="flex-end">
        <Text caption="Show rows" sx={{ fontSize: "12px" }} />
        <Popover
          closeOnClick
          button={
            <Button
              caption={itemsPerPage}
              variant="text"
              icon="arrowDown"
              iconAtTheEnd
            />
          }
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          {itemsPerPageArr.map((value) => (
            <Button
              key={value}
              caption={value}
              variant="text"
              sx={{ padding: "5px" }}
              onClick={() => {
                setItemsPerPage(value);
              }}
            />
          ))}
        </Popover>
      </Box>
    </Box>
  );
};

export { Default as Foot };

