import { Box, Loading, Error } from "@components";
import { useFetch, useTimeout } from "@hooks";
import { useEffect } from "react";
import CoinAdditionalData from "./coinAdditionalData";
import CoinMainData from "./coinMainData";
import "./styles.css";

const Coin = (props) => {
  const { urlCoin } = props;

  const { response, fetchData, loading, error } = useFetch({
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
    timeoutDispatch();

    return () => timeoutClear();
  });

  return (
    <Box className="coinPage" flex sx={{ height: "100%" }}>
      {(loading && <Loading />) ||
        (error && <Error />) ||
        (response?.data.data.id && (
          <>
            <CoinMainData data={response?.data?.data} />
            <CoinAdditionalData />
          </>
        ))}
    </Box>
  );
};

export default Coin;
