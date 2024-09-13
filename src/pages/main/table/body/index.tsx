import { Box, Button, TableRow, Error, EmptyData } from "@/components";
import type { Indexable } from "@/components/types";
import { useFetch, useTimeout } from "@/hooks";
import { AddCoin } from "@/dialogs";
import "./style.css";
import {
  addEventListener,
  convertNumber,
  dispatchEvent,
  objectToQuery,
  prepareData,
} from "@/utils";
import { dataContext } from "@/context";
import { useEffect, useState, useContext } from "react";
import React from "react";

const recordsToShow = [
  "",
  "name",
  "symbol",
  "priceUsd",
  "marketCapUsd",
  "volumeUsd24Hr",
];

type BodyProps = {
  sort: Indexable & {field: string, direction?: boolean},
  tableColumns: Indexable,
  setSort: React.Dispatch<React.SetStateAction<{
    field: string;
    direction?: boolean;
}>>
}

const Default = (props: BodyProps): React.JSX.Element => {
  const { sort, setSort, tableColumns } = props;
  const [query, setQuery] = useState({});

  const { itemsPerPage } = useContext(dataContext)!;

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
    timeoutDispatch();

    return () => timeoutClear();
  });

  prepareData(response?.data.data, sort);

  return (
    <>
      {(error && <Error />) ||
        (response?.data.data.length > 0 &&
          response?.data.data
            .filter((item: Indexable) => {
              let result = true;
              tableColumns.forEach((param: Indexable) => {
                if (item[param.field] < 0.01) {
                  result = false;
                }
              });
              return result;
            })
            .map((item: Indexable) => {
              return (
                <TableRow
                  key={item.rank}
                  items={tableColumns.map((param: Indexable, index: number) => {
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
                    } else
                      return (
                        <Box
                          //datacell={param.name}
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
                          {param.field === "rank"
                            ? item?.[param.field]
                            : convertNumber(item?.[param.field])}
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
            })) ||
        (response?.data?.data.length === 0 && (
          <EmptyData
            message="There aren't any coins yet"
            sx={{ width: "100%" }}
          />
        ))}
    </>
  );
};

export { Default as TableBody };
