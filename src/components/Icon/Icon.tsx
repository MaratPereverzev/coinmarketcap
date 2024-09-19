import type { BoxProps } from "components/Box";
import { Box } from "components/Box";
import type { Indexable } from "components/types";
import { JSX } from "react";

const iconList: Indexable = {
  arrowUp: "keyboard_arrow_up",
  arrowDown: "keyboard_arrow_down",
  default: "error",
  portfolio: "work",
  coin: "paid",
};

type IconProps = BoxProps & {
  icon?: string,
  sxIcon?: Indexable,
}

export const Icon = ({ icon, sxIcon, ...other }: IconProps): JSX.Element => {

  return (
    <Box flex ai {...other}>
      <span className="material-symbols-rounded span" style={sxIcon}>
        {iconList[icon ?? "default"]}
      </span>
    </Box>
  );
};
