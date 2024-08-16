import { Pagination, Box } from "@components";
import { dataContext } from "@context";
import { useContext } from "react";
import { dispatchEvent } from "@utils";

const Default = () => {
  const { itemsPerPage } = useContext(dataContext);

  return (
    <Box flex>
      <Pagination
        count={2000 / itemsPerPage}
        shape="rounded"
        sx={{
          padding: 1,
          ".MuiPaginationItem-root": {
            fontWeight: "700",
            fontSize: "14px",
            borderRadius: 2,
          },
          ".Mui-selected": {
            backgroundColor: "#3861fb",
          },
        }}
        onChange={(e, page) => {
          dispatchEvent("queryChange", { offset: (page - 1) * 100 });
        }}
      />
    </Box>
  );
};

export { Default as Foot };
