import { Pagination } from "@mui/material";
import type { PaginationProps } from "@/utils/types";
import React from "react"

const Default = (props: PaginationProps): React.JSX.Element => {
  const { count, sx, ...other } = props;

  return <Pagination size="small" count={count} sx={{ ...sx }} {...other} />;
};

export { Default as Pagination };
