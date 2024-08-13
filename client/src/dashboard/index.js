import { Table, TableRow, Box, TableData } from "@components";

function Dashboard() {
  const tableColumns = [
    { caption: "#", sx: { textAlign: "start" } },
    "Name",
    "Price",
    "1h%",
    "24h%",
    "7d%",
    "Market Cap",
    "Valume(24h)",
    "Circulating supply",
  ];

  return (
    <Box
      className="App"
      sx={{
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <Table
        sx={{
          borderCollapse: "collapse",
        }}
        tableHeadData={
          <>
            <TableRow values={tableColumns} isHead sx={{ textAlign: "end" }} />
          </>
        }
        tableBodyData={
          <>
            <TableRow sx={{ fontSize: "14px" }}>
              <TableData value="hello" />
              <TableData value="hello" />
              <TableData value="hello" />
            </TableRow>
          </>
        }
      />
    </Box>
  );
}

export default Dashboard;
