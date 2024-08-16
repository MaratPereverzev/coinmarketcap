import { Main } from "./main";
import { Coin } from "./coin";
import { Box } from "@components";
import { dataContext } from "@context";
import { useState, useEffect } from "react";
import { addEventListener, setPageHash, getLocalStorageValue } from "@utils";
import { Header } from "./header";

const Default = () => {
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [page, setPage] = useState(
    () => getLocalStorageValue("page") ?? "main"
  );

  useEffect(
    () =>
      addEventListener("changePage", ({ detail }) => {
        setPageHash(detail.page);
        setPage(detail.page);
      }),
    []
  );
  return (
    <dataContext.Provider value={{ itemsPerPage }}>
      <Box flex column sx={{ width: "100%" }}>
        <Header
          sx={{
            backgroundColor: "#ededed",
            borderRadius: "20px",
            margin: "20px 20px",
          }}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          page={page}
        />
        {page === "main" && <Main itemsPerPage={itemsPerPage} />}
        {page === "coin" && <Coin />}
      </Box>
    </dataContext.Provider>
  );
};

export { Default as Page };
