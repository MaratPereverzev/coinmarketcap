import { Box, Dialog, Snackbar } from "components";
import { Page } from "pages";
import { JSX } from "react";

const DashboardSx = {
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Helvetica, Arial, sans-serif",
  width: "100%",
  height: "100%",
}

export const Dashboard = (): JSX.Element => {
  return (
    <Box
      flex
      column
      className="App"
      sx={DashboardSx}
    >
      <Dialog />
      <Snackbar />
      <Page />
    </Box>
  );
};
