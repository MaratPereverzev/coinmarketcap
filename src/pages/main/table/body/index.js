import { Box, Button, TableRow } from "@components";
import { useFetch, useTimeout } from "@hooks";
import "./style.css";
import {
  addEventListener,
  convertNumber,
  dispatchEvent,
  objectToQuery,
  prepareData,
} from "@utils";
import { dataContext } from "@context";
import { useEffect, useState, useContext } from "react";

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
  const [query, setQuery] = useState({});

  const { itemsPerPage } = useContext(dataContext);

  const { response, fetchData } = useFetch({
    baseURL: "https://api.coincap.io/v2/assets",
    method: "GET",
    responseType: "json",
  });

  const { timeoutDispatch, timeoutClear } = useTimeout(() => {
    fetchData({ url: objectToQuery({ ...query, limit: itemsPerPage }) });
  }, 10000);

  useEffect(
    () =>
      addEventListener("sortData", ({ detail }) => {
        setSort(detail);
      }),
    [setSort]
  );

  useEffect(
    () =>
      addEventListener("queryChange", ({ detail }) => {
        setQuery((prev) => ({ ...prev, ...detail }));
      }),
    []
  );

  useEffect(() => {
    fetchData({ url: objectToQuery({ ...query, limit: itemsPerPage }) });
  }, [fetchData, query, itemsPerPage]);

  useEffect(() => {
    prepareData(response?.data.data, sort, recordsToShow);
    timeoutDispatch({ url: objectToQuery({ ...query, limit: itemsPerPage }) });

    return () => timeoutClear();
  });

  return (
    <>
      {response?.data.data.map((item) => {
        return (
          <TableRow
            key={item.rank}
            items={recordsToShow.map((key, index) => {
              if (index === 0) {
                return (
                  <Box flex center>
                    <Button
                      caption="Add"
                      variant="text"
                      sx={{
                        color: "rgb(88, 102, 126)",
                      }}
                      onClick={(e) => {
                        dispatchEvent("snackbarTrigger", {
                          message: "Added successfully",
                          status: "success",
                        });
                        e.stopPropagation();
                      }}
                    />
                  </Box>
                );
              }
              if (key === "rank")
                return (
                  <Box flex center gap sx={{ padding: "10px" }}>
                    {item?.[key]}
                  </Box>
                );
              else if (key === "name")
                return (
                  <Box
                    flex
                    ai
                    gap
                    sx={{
                      padding: "10px",
                    }}
                  >
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
              else
                return (
                  <Box
                    flex
                    center
                    gap
                    sx={{
                      padding: "10px",
                    }}
                  >
                    {convertNumber(item?.[key])}
                  </Box>
                );
            })}
            sx={{
              fontSize: "14px",
              height: "55px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              dispatchEvent("changePage", {
                page: "coin",
                coin: item.name,
              });
            }}
          />
        );
      })}
    </>
  );
};

export { Default as TableBody };
