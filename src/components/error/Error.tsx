import { Box } from "components/Box";
import { Text } from "components/Text";
import {JSX} from "react"

export const Error = (): JSX.Element => {
  return (
    <Box flex center gap={2} grow>
      <Text caption="Something went wrong..." />
    </Box>
  );
};
