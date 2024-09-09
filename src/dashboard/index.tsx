import { Box, Snackbar, Dialog } from "@/components";
import { Page } from "@/pages";
import React from "react"

const Dashboard = (): React.JSX.Element => {
  return (
    <Box
      flex
      column
      className="App"
      sx={{
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Helvetica, Arial, sans-serif",
        width: "100%",
        height: "100%",
      }}
    >
      <Dialog />
      <Snackbar />
      <Page />
    </Box>
  );
};

export default Dashboard;
