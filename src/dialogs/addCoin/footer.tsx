import { Box, Button } from "@/components";
import { ButtonProps, dispatchEvent } from "@/utils";
import React from "react"

const buttonProps: ButtonProps = {
  variant: "text",
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

export default Footer;
