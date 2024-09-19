import { Box, Text } from "components";
import { Indexable } from "components/types";
import { JSX } from "react";

export const Header = ({ data }: Indexable): JSX.Element => {
  const date = new Date();

  return (
    <Box
      flex
      column
      gap
      sx={{ borderBottom: "1px solid #ededed", color: "#cccccc" }}
    >
      <Box flex center grow gap="50px">
        <img
          src={`https://assets.coincap.io/assets/icons/${data?.symbol?.toLowerCase()}@2x.png`}
          alt="coin"
          style={{ width: "50px" }}
        />
        <Text caption={`${date.toDateString()}`} />
      </Box>
      <Box
        flex
        ai
        jc="space-between"
        sx={{
          fontSize: "12px",
        }}
      >
        <Text caption="DESCRIPTION" />
        <Text caption="SUBTOTAL" />
      </Box>
    </Box>
  );
};
