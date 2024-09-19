import { JSX } from "react";
import { Box } from "../Box";
import "./style.css";

export const Loading = (): JSX.Element => {
  return (
    <Box flex center sx={{ width: "100%", height: "100%" }}>
      <Box className="spinner" />
    </Box>
  );
};
