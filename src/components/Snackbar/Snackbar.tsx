import { Alert, Snackbar as SnackbarMUI } from "@mui/material";
import type { Indexable } from "components/types";
import { useEffect, useRef, useState } from 'react';
import { addEventListener } from "utils";

export const Snackbar = ({ vertical = "top", horizontal = "center" }: any): JSX.Element => {
  const data = useRef<Indexable |null>(null);

  const [state, setState] = useState({
    open: false,
    vertical,
    horizontal,
  });

  const handleClose = () => {
    setState((prev) => {
      prev = { ...state, open: false };
      return prev;
    });
  };

  useEffect(
    () =>
      addEventListener("snackbarTrigger", ({ detail }) => {
        data.current = detail ?? null;

        setState((prev) => {
          prev = { ...prev, open: true };
          return prev;
        });
      }),
    [setState, state]
  );

  return (
    <SnackbarMUI
      autoHideDuration={2000}
      anchorOrigin={{ vertical, horizontal }}
      open={state.open}
      onClose={handleClose}
      message={data.current?.message}
      key={vertical + horizontal}
    >
      {data.current?.status ? (
        <Alert
          severity={data.current?.status ?? "error"}
          sx={{ width: "100%" }}
        >
          {data.current?.message}
        </Alert>
      ) : (
        data.current?.message
      )}
    </SnackbarMUI>
  );
};

