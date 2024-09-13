import { Table } from "./table";
import React from "react"

type MainProps = {
  itemsPerPage: number;
}

const Main = (props?: MainProps): React.JSX.Element => {
  return (
    <>
      <Table sxBox={{ margin: "0 20px" }} />
    </>
  );
};

export { Main };
