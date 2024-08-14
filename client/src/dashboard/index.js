import { Box, Snackbar } from "@components";
import { Page } from "@pages";

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
      <Page />
    </Box>
  );
};

export default Dashboard;
