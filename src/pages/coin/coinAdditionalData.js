import { Box, Chart } from "@components";

const CoinAdditionalData = (props) => {
  return (
    <Box
      flex
      column
      ai
      grow
      sx={{ padding: "20px", height: "100%" }}
      className="additionalData"
    >
      <Chart />
    </Box>
  );
};

export default CoinAdditionalData;
