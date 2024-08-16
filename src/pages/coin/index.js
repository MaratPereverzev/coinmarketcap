import { Box, Chip, Loading, Text, Chart } from "@components";
import { useFetch, useTimeout } from "@hooks";
import { convertNumber } from "@utils";
import { useEffect } from "react";
import "./styles.css";

const dataRows = [
  { name: "Market Cap.", field: "marketCapUsd" },
  { name: "Volume(24h)", field: "volumeUsd24Hr" },
  { name: "Current Supply", field: "supply" },
  { name: "Max Supply", field: "maxSupply" },
];

const Coin = (props) => {
  const { urlCoin } = props;

  const { response, fetchData, loading } = useFetch({
    baseURL: "https://api.coincap.io/v2/assets",
    method: "GET",
    responseType: "json",
  });

  const { timeoutDispatch, timeoutClear } = useTimeout(() => {
    fetchData({ url: `/${urlCoin}` });
  }, 10000);

  useEffect(() => {
    fetchData({ url: `/${urlCoin}` });
  }, [fetchData, urlCoin]);

  useEffect(() => {
    timeoutDispatch({ url: `/${urlCoin}` });

    return () => timeoutClear();
  });
  const data = response?.data?.data;

  return (
    <Box className="coinPage" flex sx={{ height: "100%" }}>
      {(loading && <Loading />) || (
        <>
          <Box
            flex
            column
            sx={{
              padding: "20px",
              borderRight: "1px solid #ededed",
            }}
            className="stats"
          >
            <Box flex ai gap="5px">
              <img
                src={`https://assets.coincap.io/assets/icons/${data?.symbol.toLowerCase()}@2x.png`}
                alt="coin"
                style={{ height: "24px", width: "24px" }}
              />
              <Text caption={data?.name} sx={{ fontWeight: "700" }} />
              <Text
                caption={data?.symbol}
                sx={{ color: "grey", fontSize: "12px" }}
              />
            </Box>
            <Box flex column sx={{ paddingBottom: "10px" }}>
              <Text
                caption={convertNumber(data?.priceUsd)}
                sx={{
                  fontWeight: "700",
                  fontSize: "40px",
                  margin: "10px 0",
                  letterSpacing: "2px",
                }}
              />
              <Chip
                caption={"Rank - #" + data?.rank}
                sx={{ padding: "5px 10px" }}
              />
            </Box>
            <Box flex column sx={{ paddingBottom: "10px", fontSize: "12px" }}>
              {dataRows.map((item) => (
                <Box key={item.name} flex gap="20px">
                  <Text
                    caption={item.name}
                    sx={{
                      color: "grey",
                      display: "flex",
                      flexGrow: 1,
                      margin: "5px",
                    }}
                  />
                  <Text
                    caption={convertNumber(data?.[item.field])}
                    sx={{ fontWeight: "700", margin: "5px" }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            flex
            column
            ai
            grow
            sx={{ padding: "20px", height: "100%" }}
            classname="additionalData"
          >
            <Chart />
          </Box>
        </>
      )}
    </Box>
  );
};

export { Coin };
