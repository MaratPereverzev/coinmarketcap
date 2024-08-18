import { Main } from "./main";
import Coin from "./coin";
import { Box } from "@components";
import { dataContext } from "@context";
import { useState, useEffect, useRef } from "react";
import {
  addEventListener,
  setPageHash,
  getLocalStorageValue,
  getPageHash,
} from "@utils";
import { Header } from "./header";

const tableColumns = [
  { name: "", field: "" },
  { name: "#", field: "rank", direction: true },
  { name: "Name", field: "name" },
  { name: "Symbol", field: "symbol" },
  { name: "Price", field: "priceUsd", direction: true },
  { name: "Market Cap.", field: "marketCapUsd", direction: true },
  { name: "Volume(24h)", field: "volumeUsd24Hr", direction: true },
];

const Default = () => {
  const urlCoin = useRef("");
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [page, setPage] = useState(
    () => getLocalStorageValue("page") ?? getPageHash()
  );

  useEffect(
    () =>
      addEventListener("changePage", ({ detail }) => {
        if (detail.coin) urlCoin.current = detail.coin;
        setPageHash(detail.page);
        setPage(detail.page);
      }),
    []
  );
  useEffect(
    () =>
      addEventListener(
        "popstate",
        () => {
          setPage(getPageHash());
        },
        window
      ),
    []
  );
  return (
    <dataContext.Provider
      value={{ itemsPerPage, tableColumns, setItemsPerPage }}
    >
      <Box flex column sx={{ height: "100%", margin: "20px 20px" }}>
        <Header
          sx={{
            backgroundColor: "#ededed",
            borderRadius: "20px",
          }}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          page={page}
        />
        {page === "main" && <Main itemsPerPage={itemsPerPage} />}
        {page === "coin" && <Coin urlCoin={urlCoin.current} />}
      </Box>
    </dataContext.Provider>
  );
};

export { Default as Page };
