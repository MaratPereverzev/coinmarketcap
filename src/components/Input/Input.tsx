import { TextField } from "@mui/material";
import {JSX} from "react";
import type { SxProps, TextFieldVariants, TextFieldProps } from "@mui/material";

export type InputProps = TextFieldProps & {
  sxBox?: SxProps;
  name?: string;
  label?: string;
  variant?: TextFieldVariants;
  onChange?: (params: unknown) => void;
};

export const Input = ({ sxBox, onChange, name, variant = "outlined", label, ...other }: InputProps): React.JSX.Element => {
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
