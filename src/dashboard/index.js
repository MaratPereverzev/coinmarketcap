import { Box, Snackbar } from "@components";
import { Page } from "@pages";

const Dashboard = () => {
  return (
    <Box
      flex
      column
      className="App"
      sx={{
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Helvetica, Arial, sans-serif",
        width: "100%",
      }}
    >
      <Snackbar />
      <Page />
    </Box>
  );
};

export default Dashboard;
