import { TextField } from "@mui/material";
import React from "react";
import type { InputProps } from "@/utils/types";

const Default = (props: InputProps): React.JSX.Element => {
  const { sxBox, onChange, name, variant = "outlined", label, ...other } = props;

  return (
    <TextField
    name={name ?? ""}
    variant={variant}
    size="small"
    {...other}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        if(typeof onChange === "function") {
         onChange(name)
        }
      }
    }
    />
  );
};

export { Default as Input };
