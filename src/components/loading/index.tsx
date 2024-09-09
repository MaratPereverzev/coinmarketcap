import "./style.css";
import { Box } from "../box";
import React from "react"

const Default = (): React.JSX.Element => {
  return (
    <Box flex center sx={{ width: "100%", height: "100%" }}>
      <Box className="spinner" />
    </Box>
  );
};

export { Default as Loading };
