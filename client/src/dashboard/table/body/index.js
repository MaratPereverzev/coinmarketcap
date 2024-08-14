import { Box, Button, TableRow } from "@components";
import { useFetch, useTimeout } from "@hooks";
import { addEventListener, convertNumber, dispatchEvent } from "@utils";
import { useEffect } from "react";

const recordsToShow = [
  "",
  "name",
  "symbol",
  "priceUsd",
  "marketCapUsd",
  "volumeUsd24Hr",
];

const Default = (props) => {
  const { sort, setSort } = props;

  const { response, fetchData } = useFetch({
    url: "https://api.coincap.io/v2/assets",
    method: "GET",
    responseType: "json",
  });

  const { timeoutDispatch, timeoutClear } = useTimeout(() => {
    fetchData();
  }, 10000);

  useEffect(
    () =>
      addEventListener("sortData", ({ detail }) => {
        setSort(detail);
      }),
    [setSort]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    timeoutDispatch();

    return () => timeoutClear();
  });

  response?.data.data.sort(function (item1, item2) {
    let result;
    if (sort.direction === false) {
      result = Number.parseFloat(item2[sort.sort] - item1[sort.sort]);
      if (isNaN(result))
        return item1[sort.sort].localeCompare(item2[sort.sort]);
      return result;
    } else {
      result = Number.parseFloat(item1[sort.sort] - item2[sort.sort]);
      if (isNaN(result))
        return item2[sort.sort].localeCompare(item1[sort.sort]);
      return result;
    }
  });

  return (
    <>
      {response?.data.data.map((item) => {
        return (
          <TableRow
            key={item.symbol}
            items={recordsToShow.map((key, index) => {
              if (index === 0) {
                return (
                  <Box flex center>
                    <Button
                      caption="Add"
                      variant="text"
                      sx={{ color: "rgb(88, 102, 126)" }}
                      onClick={() => {
                        dispatchEvent("snackbarTrigger", {
                          message: "Added successfully",
                          status: "success",
                        });
                      }}
                    />
                  </Box>
                );
              }
              if (key === "name") {
                return (
                  <Box flex ai gap sx={{ padding: "10px" }}>
                    {key === "name" && (
                      <img
                        src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}
                        style={{ height: "24px", width: "24px" }}
                        alt="coin"
                      />
                    )}
                    {convertNumber(item?.[key])}
                  </Box>
                );
              } else {
                return (
                  <Box flex center gap sx={{ padding: "10px" }}>
                    {convertNumber(item?.[key])}
                  </Box>
                );
              }
            })}
            sx={{ fontSize: "14px", height: "55px", textAlign: "center" }}
          />
        );
      })}
    </>
  );
};

export { Default as TableBody };
