import { Box, Chart, Error, Loading } from "components";
import { useFetch } from "hooks";
import { useEffect } from "react";

type CoinAdditionalDataProps = {
  urlCoin?: string
}

export const CoinAdditionalData = ({ urlCoin }: CoinAdditionalDataProps) => {
  const { response, fetchData, error, loading } = useFetch({
    baseURL: "https://api.coincap.io/v2/assets",
    method: "GET",
    responseType: "json",
  });

  useEffect(() => {
    fetchData({
      url: `https://api.coincap.io/v2/assets/${urlCoin}/history?interval=d1`,
    });
  }, [urlCoin, fetchData]);

  return (
    <Box
      flex
      column
      ai
      grow
      sx={{ padding: "20px", height: "100%" }}
      className="additionalData"
    >
      {(error && <Error />) ||
        (loading && <Loading />) ||
        (response?.data?.data.length > 0 && (
          <Chart
            data={response?.data?.data}
            name="Price USD."
            value="priceUsd"
          />
        ))}
    </Box>
  );
};
