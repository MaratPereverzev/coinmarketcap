import { Box, Input } from "@/components";
import { useTimeout } from "@/hooks";
import { dispatchEvent } from "@/utils";
import {sxProp} from "@/components/types"
import React from "react"

type MainHeaderProps = {
  sx?: sxProp;
  page?: string
}

const MainHeader = (props: MainHeaderProps) => {
  const { sx, page } = props;
  const { timeoutReset } = useTimeout((e: React.ChangeEvent<HTMLInputElement>) => {
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
        <Input
          variant="standard"
          placeholder="search"
          sx={{ paddingRight: "20px" }}
          onChange={() => (e: React.ChangeEvent<HTMLInputElement>) => {
            timeoutReset(e);
          }}
        />
      )}
    </Box>
  );
};

export default MainHeader;
