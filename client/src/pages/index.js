import { Main } from "./main";
import { useState } from "react";
const Default = () => {
  const [page] = useState("main");
  return <>{page === "main" && <Main />}</>;
};

export { Default as Page };
