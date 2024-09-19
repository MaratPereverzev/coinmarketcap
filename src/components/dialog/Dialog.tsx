import { Dialog as DialogMUI, useMediaQuery, useTheme } from "@mui/material";
import type { Indexable } from "components/types";
import { JSX, useEffect, useRef, useState } from "react";
import { addEventListener } from "utils";

export const Dialog = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const dialogContent = useRef(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(
    () =>
      addEventListener("onOpenDialog", ({ detail }: Indexable) => {
        dialogContent.current = detail?.dialogContent;
        setOpen(true);
      }),
    []
  );

  useEffect(
    () =>
      addEventListener("dialogTrigger", ({ detail }) => {
        if (detail?.opened !== null) setOpen((prev) => (prev = detail.opened));
      }),
    []
  );

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DialogMUI fullScreen={fullScreen} open={open} onClose={handleClose}>
        {dialogContent.current}
      </DialogMUI>
    </>
  );
};
