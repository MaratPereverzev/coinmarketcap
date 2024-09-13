import { Box } from "@/components";
import MainHeader from "./main";
import SubHeader from "./subHeader";
import React from "react"
import { Indexable } from "@/components/types";

type HeaderProps = {
  sx?: Indexable
  page?: string
}

const Header = (props: HeaderProps): React.JSX.Element => {
  const { page } = props;

  return (
    <Box flex column>
      <MainHeader page={page} />
      <SubHeader />
    </Box>
  );
};

export { Header };
