import { Box, Error, Text } from "@components";
import { useEffect } from "react";
import { useTimeout, useFetch } from "@hooks";
import { convertNumber } from "@utils";

const SubHeader = (props) => {
  const { response, fetchData, error, loading } = useFetch({
    baseURL: "https://api.coincap.io/v2/assets?limit=3",
    method: "GET",
    responseType: "json",
  });

  const { timeoutReset } = useTimeout(() => {
    fetchData();
  }, 60000);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    timeoutReset();
  });

  const data = response?.data?.data;
  return (
    <Box flex jc ai gap="30px">
      {(error && <Error />) ||
        (loading && <Text caption="Loading..." />) ||
        (data?.length > 0 &&
          data.map((record) => (
            <Box flex gap="5px">
              <Text caption={record.symbol + ":"} />
              <Text caption={convertNumber(record.priceUsd)} />
            </Box>
          )))}
    </Box>
  );
};

export default SubHeader;
