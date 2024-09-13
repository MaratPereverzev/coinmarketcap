import { Box, Error, Text } from "@/components";
import type { Indexable } from "@/components/types";
import { useFetch, useTimeout } from "@/hooks";
import { convertNumber } from "@/utils";
import React, { useEffect } from "react";

const SubHeader = (): React.JSX.Element => {
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
          data.map((record: Indexable) => (
            <Box key={record?.symbol} flex gap="5px">
              <Text caption={record.symbol + ":"} />
              <Text caption={convertNumber(record.priceUsd)} />
            </Box>
          )))}
    </Box>
  );
};

export default SubHeader;
