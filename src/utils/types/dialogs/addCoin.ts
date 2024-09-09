import type { Indexable } from "../object";

type addCoinDataProps = {
  data: Indexable & {
    symbol?: string;
    name?: string;
    priceUsd?: string;
  };
};

export type { addCoinDataProps };
