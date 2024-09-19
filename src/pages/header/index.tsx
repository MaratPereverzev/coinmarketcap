import { Box } from "components";
import { MainHeader } from "./main";
import SubHeader from "./subHeader";
import { JSX } from "react"
import { Indexable } from "components/types";

type HeaderProps = {
  sx?: Indexable
  page?: string
}

export const Header = ({ page }: HeaderProps): JSX.Element => {
  return (
    <Box flex column>
      <MainHeader page={page} />
      <SubHeader />
    </Box>
  );
};
