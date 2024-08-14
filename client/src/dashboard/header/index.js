import { Box, Input } from "@components";
const Header = () => {
  return (
    <Box flex ai jc="flex-end" sx={{ width: "100%", padding: "10px 0" }}>
      <Input placeholder="search" />
    </Box>
  );
};

export { Header };
