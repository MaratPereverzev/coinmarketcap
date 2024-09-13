import { TextField } from "@mui/material";
import React from "react";
import type { SxProps, TextFieldVariants, TextFieldProps } from "@mui/material";

type InputProps = TextFieldProps & {
  sxBox?: SxProps;
  name?: string;
  label?: string;
  variant?: TextFieldVariants;
  onChange?: (params: unknown) => void;
};

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
