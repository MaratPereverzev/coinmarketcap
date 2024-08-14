import { TableRow, Box, Button } from "@components";
import { dispatchEvent } from "@utils";

const tableColumns = [
  { name: "", field: "", direction: false },
  { name: "Name", field: "name", direction: false },
  { name: "Symbol", field: "symbol", direction: false },
  { name: "Price", field: "priceUsd", direction: false },
  { name: "Market Cap.", field: "marketCapUsd", direction: false },
  { name: "Volume(24h)", field: "volumeUsd24Hr", direction: false },
];

const Default = (props) => {
  const { sort } = props;

  return (
    <TableRow
      items={tableColumns.map((item) => (
        <Box flex center>
          <Button
            caption={item.name}
            variant="text"
            sxText={{
              margin: 0,
              color: sort?.sort === item.field && "#3861fb",
            }}
            onClick={() => {
              dispatchEvent("sortData", {
                sort: item.field,
                direction: item.direction,
              });

              item.direction = !item.direction;
            }}
          />
        </Box>
      ))}
      isHead
      sx={{ textAlign: "start" }}
    />
  );
};

export { Default as TableHead };
