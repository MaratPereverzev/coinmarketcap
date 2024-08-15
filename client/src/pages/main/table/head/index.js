import { TableRow, Box, Button, Icon } from "@components";
import { dispatchEvent } from "@utils";

const Default = (props) => {
  const { sort, tableColumns } = props;

  return (
    <TableRow
      items={tableColumns.map((item) => (
        <Box flex center>
          <Icon
            icon={item.direction === false ? "arrowUp" : "arrowDown"}
            sx={{ opacity: item.field === sort.sort ? 1 : 0 }}
          />
          <Button
            caption={item.name}
            variant="text"
            sxText={{
              fontWeight: "900",
              margin: 0,
              color: sort?.sort === item.field && "#3861fb",
            }}
            onClick={() => {
              if (item?.direction !== null && item.direction !== undefined) {
                dispatchEvent("sortData", {
                  sort: item.field,
                  direction: item.direction,
                });

                item.direction = !item.direction;
              }
            }}
          />
        </Box>
      ))}
      isHead
      sx={{
        textAlign: "start",
        position: "sticky",
        top: "0px",
        overflow: "hidden",
        backgroundColor: "white",
        height: "50px",
      }}
    />
  );
};

export { Default as TableHead };
