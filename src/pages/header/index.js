import { Box } from "@components";
import MainHeader from "./main";
import SubHeader from "./subHeader";

const Header = (props) => {
  const { page } = props;

  return (
    <Box flex column>
      <MainHeader page={page} />
      <SubHeader />
    </Box>
  );
};

export { Header };
