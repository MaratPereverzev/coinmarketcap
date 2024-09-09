import { EmptyPageProps } from "@/utils/types";
import React from "react";
import { Box } from "../box";
import { Icon } from "../icon";
import { Text } from "../text";

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

