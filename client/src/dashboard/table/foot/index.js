import { Pagination } from "@components";
const Default = () => {
  return (
    <Pagination
      count={2000}
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
    />
  );
};

export { Default as Foot };
