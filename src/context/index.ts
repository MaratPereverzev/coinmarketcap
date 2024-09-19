import type { Indexable } from "components/types";
import { createContext, Dispatch, SetStateAction } from "react";

export type contextProps = Indexable & {
  itemsPerPage: number;
  tableColumns: Indexable;
  setItemsPerPage: Dispatch<SetStateAction<number>>;
};
export const dataContext = createContext<contextProps | null>(null);
