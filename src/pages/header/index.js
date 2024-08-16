import { Box, Input, Button, Popover, Text } from "@components";
import { useTimeout } from "@hooks";
import { dispatchEvent } from "@utils";

const itemsPerPageArr = [100, 50, 25];

const Header = (props) => {
  const { sx, page, itemsPerPage, setItemsPerPage } = props;
  const { timeoutReset } = useTimeout((e) => {
    dispatchEvent("queryChange", { search: e.target.value });
  }, 1500);

  return (
    <Box flex ai jc="space-between" sx={{ ...sx }}>
      <img
        src="https://www.tokocrypto.com/static/cloud-web-ui/cloud-toko/static/images/homepage/partner/coinmarketcap-v2.svg"
        alt="logo"
        style={{ padding: 0, margin: 0 }}
      />
      {page === "main" && (
        <Box flex ai gap>
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
          <Input
            variant="standard"
            placeholder="search"
            sx={{ paddingRight: "20px" }}
            onChange={() => (e) => {
              timeoutReset(e);
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export { Header };
