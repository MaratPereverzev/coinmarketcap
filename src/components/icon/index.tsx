import { Box } from "../box";
import React from "react"
import type { Indexable } from "@/utils";

const iconList: Indexable = {
  arrowUp: "keyboard_arrow_up",
  arrowDown: "keyboard_arrow_down",
  default: "error",
  portfolio: "work",
  coin: "paid",
};

const Default = (props: any): React.JSX.Element => {
  const { icon, sx, sxIcon, ...other } = props;

  return (
    <Box flex ai sx={{ ...sx }} {...other}>
      <span className="material-symbols-rounded span" style={sxIcon}>
        {iconList[icon ?? "default"]}
      </span>
    </Box>
  );
};

export { Default as Icon };
