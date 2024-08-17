import { Box, Button, Text } from "@components";
import { convertNumber, dispatchEvent } from "@utils";
import { useState } from "react";

const AddCoin = (props) => {
  const { data } = props;
  const [count, setCount] = useState(1);
  const date = new Date();

  return (
    <Box flex column gap="20px" sx={{ padding: "40px 40px 20px 40px" }}>
      <Box flex center grow gap="50px">
        <img
          src={`https://assets.coincap.io/assets/icons/${data?.symbol.toLowerCase()}@2x.png`}
          alt="coin"
          style={{ width: "50px" }}
        />
        <Text caption={`${date.toDateString()}`} sx={{ color: "#cccccc" }} />
      </Box>
      <Box
        flex
        ai
        jc="space-between"
        sx={{ borderBottom: "1px solid #ededed" }}
      >
        <Text
          caption="DESCRIPTION"
          sx={{ color: "#cccccc", fontSize: "12px" }}
        />
        <Text caption="SUBTOTAL" sx={{ color: "#cccccc", fontSize: "12px" }} />
      </Box>
      <Box flex column>
        <Box flex jc="space-between" ai sx={{ color: "grey" }}>
          <Text
            caption={data?.name}
            sx={{
              fontWeight: "500",
            }}
          />
          <Box flex ai gap="2px">
            <Button
              caption="+"
              sx={{
                backgroundColor: "#ededed",
                borderRadius: "10px",
                border: "none",
                width: "30px",
              }}
              sxText={{ margin: 0 }}
              onClick={() => setCount((prev) => prev + 1)}
            />
            <Text caption={count} />
            <Button
              caption="-"
              sx={{
                backgroundColor: "#ededed",
                borderRadius: "10px",
                border: "none",
                width: "30px",
              }}
              sxText={{
                margin: 0,
              }}
              onClick={() => {
                if (count > 1) setCount((prev) => prev - 1);
              }}
            />
          </Box>
          <Text caption={convertNumber(data?.priceUsd)} />
        </Box>
      </Box>
      <Box
        flex
        jc="space-between"
        ai
        sx={{ color: "grey", borderBottom: "1px solid #ededed" }}
      >
        <Text
          caption="Total"
          sx={{
            fontWeight: "500",
          }}
        />
        <Text
          caption={convertNumber(count * data?.priceUsd)}
          sx={{ fontWeight: "900", fontSize: "18px" }}
        />
      </Box>
      <Box flex jc="flex-end" gap="5px">
        <Button
          caption="Add"
          variant="text"
          sx={{
            backgroundColor: "#ededed",
            padding: "4px",
            borderRadius: "10px",
          }}
          onClick={() => {
            dispatchEvent("snackbarTrigger", {
              message: "Added successfully",
              status: "success",
            });
            dispatchEvent("dialogTrigger", { closed: true });
          }}
        />
        <Button
          caption="Cancel"
          variant="text"
          sx={{
            backgroundColor: "#ededed",
            padding: "4px",
            borderRadius: "10px",
          }}
          onClick={() => {
            dispatchEvent("dialogTrigger", { closed: true });
          }}
        />
      </Box>
    </Box>
  );
};

export { AddCoin };
