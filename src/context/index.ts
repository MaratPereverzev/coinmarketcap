import type { Indexable } from "@/components/types";
import { createContext } from "react";
import React from "react";

type contextProps = Indexable & {
  itemsPerPage: number;
  tableColumns: Indexable;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
};
const dataContext = createContext<contextProps | null>(null);

export { dataContext };
