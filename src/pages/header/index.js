import { Box } from "@components";
import MainHeader from "./main";
import SubHeader from "./subHeader";

/*
<Text caption="Show rows" sx={{ fontSize: "12px" }} />
          <Popover
            closeOnClick
            button={
              <Button
                caption={itemsPerPage}
                variant="text"
                icon="arrowDown"
                iconAtTheEnd
              />
            }
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            {itemsPerPageArr.map((value) => (
              <Button
                key={value}
                caption={value}
                variant="text"
                sx={{ padding: "5px" }}
                onClick={() => {
                  setItemsPerPage(value);
                }}
              />
            ))}
          </Popover>
          */

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
