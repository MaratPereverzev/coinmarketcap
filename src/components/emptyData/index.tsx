import React from "react";
import { Box } from "../box";
import type {BoxProps} from "../box"
import { Icon } from "../icon";
import { Text } from "../text";

type EmptyPageProps = BoxProps & {
  message?: string;
  icon?: string;
};

const Default = (props: EmptyPageProps): React.JSX.Element => {
  const { message, icon, sx, ...other } = props;
  return (
    <Box flex grow center column sx={{ color: "grey", ...sx }} {...other}>
      <Icon icon={icon} sx={{ ".span": { fontSize: "70px" } }} />
      <Text caption={message} sx={{ fontSize: "25px" }} />
    </Box>
  );
};

export { Default as EmptyData };

