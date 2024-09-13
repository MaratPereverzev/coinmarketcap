import { useState, useEffect, useRef } from "react";
import { addEventListener } from "@/utils";
import { Snackbar, Alert } from "@mui/material";
import type {Indexable} from "../types";
import React from 'react'

const Default = (props: any): React.JSX.Element => {
  const { vertical = "top", horizontal = "center" } = props;
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
    <Snackbar
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
    </Snackbar>
  );
};

export { Default as Snackbar };
