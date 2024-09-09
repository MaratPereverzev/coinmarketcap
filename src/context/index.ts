import { Indexable } from "@/utils";
import { createContext } from "react";
const dataContext = createContext<Indexable | null>(null);

export { dataContext };
