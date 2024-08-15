import { Header } from "./header";
import { Table } from "./table";
import { Box } from "@components";

const Main = () => {
  return (
    <Box flex column sx={{ width: "100%" }}>
      <Header
        sx={{
          backgroundColor: "#ededed",
          borderRadius: "20px",
          margin: "20px 20px",
        }}
      />
      <Table sxBox={{ margin: "0 20px" }} />
    </Box>
  );
};

export { Main };
