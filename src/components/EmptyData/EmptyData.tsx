import type { BoxProps } from "components/Box";
import { Box } from "components/Box";
import { Icon } from "components/Icon";
import { Text } from "components/Text";
import { Indexable } from "components/types";
import { JSX } from "react";

export type EmptyDataProps = BoxProps & {
  message?: string;
  icon?: string;
};

const defaultBoxSx = {
  color: "grey" 
}

const defaultIconSx = {
  ".span": { fontSize: "70px" }
} as Indexable

const defaultTextSx = {
  fontSize: "25px"
}

export const EmptyData = ({ message, icon, sx, ...other }: EmptyDataProps): JSX.Element => {
  return (
    <Box flex grow center column sx={{ ...defaultBoxSx, ...sx }} {...other}>
      <Icon icon={icon} sx={defaultIconSx} />
      <Text caption={message} sx={defaultTextSx} />
    </Box>
  );
};

