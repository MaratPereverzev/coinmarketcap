import { Box, Snackbar } from "@components";
import { Header } from "./header";
import { Table } from "./table";

const Dashboard = () => {
  return (
    <Box
      flex
      column
      center
      grow
      className="App"
      sx={{
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <Snackbar />
      <Header />
      <Table />
    </Box>
  );
};

export default Dashboard;
