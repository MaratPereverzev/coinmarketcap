import { Pagination } from "@mui/material";

const Default = (props) => {
  const { count, sx, ...other } = props;

  return <Pagination size="small" count={count} sx={{ ...sx }} {...other} />;
};

export { Default as Pagination };
