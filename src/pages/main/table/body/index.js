import { Box, Button, TableRow, Error } from "@components";
import { useFetch, useTimeout } from "@hooks";
import { AddCoin } from "@dialogs";
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
  const { sort, setSort, tableColumns } = props;
  const [query, setQuery] = useState({});

  const { itemsPerPage } = useContext(dataContext);

  const { response, fetchData, error } = useFetch({
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
    timeoutDispatch({ url: objectToQuery({ ...query, limit: itemsPerPage }) });

    return () => timeoutClear();
  });

  prepareData(response?.data.data, sort, recordsToShow);

  return (
    <>
      {(error && <Error />) ||
        (response?.data.data &&
          response?.data.data
            .filter((item) => {
              let result = true;
              tableColumns.forEach((param) => {
                if (item[param.field] < 0.01) {
                  result = false;
                }
              });
              return result;
            })
            .map((item) => {
              return (
                <TableRow
                  key={item.rank}
                  items={tableColumns.map((param, index) => {
                    if (index === 0) {
                      return (
                        <Box flex center sx={{ height: "100%" }}>
                          <Button
                            caption="Add"
                            variant="text"
                            sx={{
                              color: "rgb(88, 102, 126)",
                            }}
                            onClick={(e) => {
                              dispatchEvent("onOpenDialog", {
                                dialogContent: <AddCoin data={item} />,
                              });
                              e.stopPropagation();
                            }}
                          />
                        </Box>
                      );
                    }
                    if (param.field === "rank")
                      return (
                        <Box
                          datacell={param.name}
                          flex
                          center
                          gap
                          sx={{ padding: "10px" }}
                        >
                          {item?.[param.field]}
                        </Box>
                      );
                    else
                      return (
                        <Box
                          datacell={param.name}
                          flex
                          center
                          gap
                          sx={{
                            padding: "10px",
                          }}
                        >
                          {param.field === "name" && (
                            <img
                              src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}
                              style={{ height: "24px", width: "24px" }}
                              alt="coin"
                            />
                          )}
                          {convertNumber(item?.[param.field])}
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
                      coin: item.id.toLowerCase(),
                    });
                  }}
                />
              );
            }))}
    </>
  );
};

export { Default as TableBody };
