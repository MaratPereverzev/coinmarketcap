import { Box, Button, Chip, Text } from "@/components";
import { Indexable } from "@/components/types";
import { AddCoin } from "@/dialogs";
import { convertNumber, dispatchEvent } from "@/utils";
import React from "react";

const dataRows = [
  { name: "Market Cap.", field: "marketCapUsd" },
  { name: "Volume(24h)", field: "volumeUsd24Hr" },
  { name: "Current Supply", field: "supply" },
  { name: "Max Supply", field: "maxSupply" },
];

type CoinMainDataProps = {
  data: Indexable
}

const CoinMainData = (props: CoinMainDataProps) => {
  const { data } = props;

  return (
    <Box
      flex
      column
      gap="5px"
      sx={{
        padding: "10px",
        borderRight: "1px solid #ededed",
      }}
      className="stats"
    >
      <Box flex ai gap="5px">
        <img
          src={`https://assets.coincap.io/assets/icons/${data?.symbol.toLowerCase()}@2x.png`}
          alt="coin"
          style={{ height: "24px", width: "24px" }}
        />
        <Text caption={data?.name} sx={{ fontWeight: "700", margin: 0 }} />
        <Text caption={data?.symbol} sx={{ color: "grey", fontSize: "12px" }} />
      </Box>
      <Box flex column>
        <Text
          caption={convertNumber(data?.priceUsd)}
          sx={{
            fontWeight: "700",
            fontSize: "40px",
            margin: "10px 0",
            letterSpacing: "2px",
          }}
        />
        <Chip caption={"Rank - #" + data?.rank} sx={{ padding: "5px 10px" }} />
      </Box>
      <Box flex column sx={{ fontSize: "12px" }}>
        {dataRows.map((item) => (
          <Box key={item.name} flex gap="25px">
            <Text
              caption={item.name}
              sx={{
                color: "grey",
                display: "flex",
                flexGrow: 1,
                margin: "5px",
              }}
            />
            <Text
              caption={convertNumber(data?.[item.field])}
              sx={{ fontWeight: "700", margin: "5px" }}
            />
          </Box>
        ))}
      </Box>
      <Button
        caption="Add to portfolio"
        variant="text"
        icon="portfolio"
        sxIcon={{ fontSize: "20px" }}
        sx={{
          color: "grey",
          backgroundColor: "#ededed",
          padding: "5px 10px",
          borderRadius: "10px",
        }}
        onClick={() => {
          dispatchEvent("onOpenDialog", {
            dialogContent: <AddCoin data={data} />,
          });
        }}
      />
    </Box>
  );
};

export default CoinMainData;
