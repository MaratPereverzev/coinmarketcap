import { Pagination } from "@components";
import { dispatchEvent } from "@utils";

const Default = () => {
  return (
    <Pagination
      count={2000 / 100}
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
  );
};

export { Default as Foot };
