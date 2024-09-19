import { Box, Button, Text } from "components";
import type { Indexable } from "components/types";
import { JSX, useState } from "react";
import { convertNumber } from "utils";

const buttonSx = {
  variant: "text",
  sx: {
    backgroundColor: "#ededed",
    borderRadius: "10px",
    width: "30px",
  },
  sxText: { margin: 0 },
};

const textSx = {
  fontWeight: "900", 
  fontSize: "18px"
}

export const Body = ({ data }: Indexable): JSX.Element => {
  const [count, setCount] = useState(1);

  return (
    <Box flex column sx={{ color: "grey", borderBottom: "1px solid #ededed" }}>
      <Box flex jc="space-between" ai>
        <Text caption={data?.name} />
        <Box flex ai gap="2px">
          <Button
            caption="+"
            {...buttonSx}
            onClick={(): void => setCount((prev) => prev + 1)}
          />
          <Text caption={count} />
          <Button
            caption="-"
            {...buttonSx}
            onClick={(): void => {
              if (count > 1) setCount((prev) => prev - 1);
            }}
          />
        </Box>
        <Text caption={convertNumber(data?.priceUsd)} />
      </Box>
      <Box flex jc="space-between" ai>
        <Text caption="Total" />
        <Text
          caption={convertNumber(count * data?.priceUsd)}
          sx={textSx}
        />
      </Box>
    </Box>
  );
};