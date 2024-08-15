import { Main } from "./main";
import { useState, useEffect } from "react";
import { addEventListener, setPageHash, getLocalStorageValue } from "@utils";

const Default = () => {
  const [page, setPage] = useState(
    () => getLocalStorageValue("page") ?? "main"
  );

  useEffect(
    () =>
      addEventListener("changePage", ({ detail }) => {
        setPageHash(detail.page, true);
        setPage(detail.page);
      }),
    []
  );
  return <>{page === "main" && <Main />}</>;
};

export { Default as Page };
