import type { sxProp } from "components/types";
import { JSX } from "react";
import { Box } from "components/Box";
import { Icon } from "components/Icon";
import { Text } from "components/Text";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
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

const defaultButtonSx = {
  padding: 0,
  margin: 0,
  backgroundColor: "transparent",
  fontWeight: "700",
  cursor: "pointer",
}

export const Button = (props: ButtonProps): JSX.Element => {
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
          ...defaultButtonSx,
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

