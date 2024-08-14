import { Box, Input } from "@components";
import { useTimeout } from "@hooks";
import { dispatchEvent } from "@utils";

const Header = () => {
  const { timeoutReset } = useTimeout((e) => {
    dispatchEvent("queryChange", { search: e.target.value });
  }, 1500);

  return (
    <Box flex ai jc="flex-end" sx={{ width: "100%", padding: "10px 0" }}>
      <Input
        placeholder="search"
        onChange={() => (e) => {
          timeoutReset(e);
        }}
      />
    </Box>
  );
};

export { Header };
