import { JSX } from "react";
import { Table } from "./table";

type MainProps = {
  itemsPerPage: number;
}

const Main = (props?: MainProps): JSX.Element => {
  return (
    <>
      <Table sxBox={{ margin: "0 20px" }} />
    </>
  );
};

export { Main };

