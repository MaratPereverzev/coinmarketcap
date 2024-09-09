import { Box } from "@/components";
import Body from "./body";
import Footer from "./footer";
import Header from "./header";
import React from "react"
import { addCoinDataProps } from "@/utils/types";

const AddCoin = (props: addCoinDataProps): React.JSX.Element => {
  const {data} = props;

  return (
    <Box flex column gap="20px" sx={{ padding: "40px 40px 20px 40px" }}>
      <Header data={data} />
      <Body data={data} />
      <Footer />
    </Box>
  );
};

export { AddCoin };
