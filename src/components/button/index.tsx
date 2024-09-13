import type { sxProp } from "../types";
import React from "react";
import { Box } from "../box";
import { Icon } from "../icon";
import { Text } from "../text";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  sx?: sxProp;
  caption?: string | number;
  sxText?: sxProp;
  sxBox?: sxProp;
  sxIcon?: sxProp;
  variant?: string;
  icon?: string;
  iconAtTheEnd?: boolean;
  templateColumns?: string;
};

const Button = (props: ButtonProps): React.JSX.Element => {
  const {
    caption,
    sx = {},
    sxText,
    sxBox,
    sxIcon,
    variant,
    icon,
    iconAtTheEnd,
    ...other
  } = props;

  if (variant === "text") {
    sx.border = sx?.border ?? "none";
    sx.backgroundColor = sx?.backgroundColor ?? "transparent";
  }

  return (
    <Box
    flex
    sx={{
      cursor: "pointer",
      ...sx,
    }}
    >
      <>
        {icon && !iconAtTheEnd && <Icon icon={icon} sxIcon={sxIcon} />}
      </>
      <button
        style={{
          padding: 0,
          margin: 0,
          border: "none",
          backgroundColor: "transparent",
          fontWeight: "700",
          cursor: "pointer",
          ...sx,
        }}
        {...other}
      >
        {caption && (
          <Text caption={caption} sx={{ padding: 0, margin: 0, ...sxText }} />
        )}
      </button>
      <>
        {icon !== undefined && iconAtTheEnd !== undefined && <Icon icon={icon} sxIcon={sxIcon} />}
      </>
    </Box>
  );
};

export { Button };
export type {ButtonProps}

