import { Box } from "@components";
import Body from "./body";
import Footer from "./footer";
import Header from "./header";

const AddCoin = (props) => {
  const { data } = props;

  return (
    <Box flex column gap="20px" sx={{ padding: "40px 40px 20px 40px" }}>
      <Header data={data} />
      <Body data={data} />
      <Footer />
    </Box>
  );
};

export { AddCoin };
