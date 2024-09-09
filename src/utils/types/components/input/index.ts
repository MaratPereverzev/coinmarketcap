import { TextFieldProps, SxProps, TextFieldVariants } from "@mui/material";

type Default = TextFieldProps & {
  sxBox?: SxProps;
  name?: string;
  label?: string;
  variant?: TextFieldVariants;
  onChange?: (params: unknown) => void;
};

export type { Default as InputProps };
