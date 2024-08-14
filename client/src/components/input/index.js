import { TextField } from "@mui/material";

const Default = (props) => {
  const {
    sx,
    sxBox,
    variant = "outlined",
    label,
    onChange,
    name,
    ...other
  } = props;

  return (
    <TextField
      label={label}
      name={name}
      variant={variant}
      size="small"
      sx={{ ...sx }}
      {...other}
      onChange={
        typeof onChange === "function"
          ? onChange(name)
          : (e) => {
              console.log(e);
            }
      }
    />
  );
};

export { Default as Input };
