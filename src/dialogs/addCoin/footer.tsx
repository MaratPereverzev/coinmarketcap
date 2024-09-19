import { Box, Button } from "components";
import type { ButtonProps } from "components/Button";
import { dispatchEvent } from "utils";

const buttonProps: ButtonProps = {
  variant: "text",
  sx: {
    backgroundColor: "#ededed",
    padding: "4px",
    borderRadius: "10px",
  },
};

export const Footer = () => {
  return (
    <Box flex jc="flex-end" gap="5px">
      <Button
        caption="Add"
        {...buttonProps}
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
        {...buttonProps}
        onClick={() => {
          dispatchEvent("dialogTrigger", { closed: true });
        }}
      />
    </Box>
  );
};
