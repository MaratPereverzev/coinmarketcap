import { Box, Input } from "components";
import { sxProp } from "components/types";
import { useTimeout } from "hooks";
import { ChangeEvent, JSX } from "react";
import { dispatchEvent } from "utils";

type MainHeaderProps = {
  sx?: sxProp;
  page?: string
}

export const MainHeader = ({ sx, page }: MainHeaderProps): JSX.Element => {
  const { timeoutReset } = useTimeout((e: ChangeEvent<HTMLInputElement>) => {
    dispatchEvent("queryChange", { search: e?.target?.value });
  }, 1500);

  return (
    <Box flex ai jc="space-between" sx={{ ...sx }}>
      <img
        src="https://www.tokocrypto.com/static/cloud-web-ui/cloud-toko/static/images/homepage/partner/coinmarketcap-v2.svg"
        alt="logo"
        style={{ padding: 0, margin: 0 }}
      />
      {page === "main" && (
        <Input
          variant="standard"
          placeholder="search"
          sx={{ paddingRight: "20px" }}
          onChange={() => (e: ChangeEvent<HTMLInputElement>) => {
            timeoutReset(e);
          }}
        />
      )}
    </Box>
  );
};
