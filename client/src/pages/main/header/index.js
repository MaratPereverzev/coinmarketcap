import { Box, Input } from "@components";
import { useTimeout } from "@hooks";
import { dispatchEvent } from "@utils";

const Header = () => {
  const { timeoutReset } = useTimeout((e) => {
    dispatchEvent("queryChange", { search: e.target.value });
  }, 1500);

  return (
    <Box flex ai jc="space-between" sx={{ width: "100%", padding: "10px 0" }}>
      <img
        src="https://www.tokocrypto.com/static/cloud-web-ui/cloud-toko/static/images/homepage/partner/coinmarketcap-v2.svg"
        alt="logo"
        style={{ padding: 0, margin: 0 }}
      />
      <Input
        variant="standard"
        placeholder="search"
        onChange={() => (e) => {
          timeoutReset(e);
        }}
      />
    </Box>
  );
};

export { Header };
