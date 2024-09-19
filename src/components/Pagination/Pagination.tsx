import { Pagination as PaginationMUI} from "@mui/material";
import type { PaginationProps } from "@mui/material";
import {JSX} from "react"

export const Pagination = ({ count, sx, ...other }: PaginationProps): JSX.Element => {
  return <PaginationMUI size="small" count={count} sx={sx} {...other} />;
};
