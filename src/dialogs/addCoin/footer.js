import { Box, Button } from "@components";
import { dispatchEvent } from "@utils";

const buttonSx = {
  varian: "text",
  sx: {
    backgroundColor: "#ededed",
    padding: "4px",
    borderRadius: "10px",
  },
};

const Footer = () => {
  return (
    <Box flex jc="flex-end" gap="5px">
      <Button
        caption="Add"
        {...buttonSx}
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
        {...buttonSx}
        onClick={() => {
          dispatchEvent("dialogTrigger", { closed: true });
        }}
      />
    </Box>
  );
};

export default Footer;
