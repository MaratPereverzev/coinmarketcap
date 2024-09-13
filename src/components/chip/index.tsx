import { Text } from "../text";
import React from "react"
import type {sxProp} from "../types"

type ChipProps = React.HTMLAttributes<HTMLParagraphElement> & {
  sx?: sxProp;
  caption: string;
};

const Chip = (props: ChipProps): React.JSX.Element => {
  const { sx, caption, ...other } = props;

  return (
    <Text
      caption={caption}
      sx={{
        backgroundColor: "#ededed",
        width: "max-content",
        margin: 0,
        padding: "5px",
        fontWeight: "500",
        borderRadius: "20px",
        ...sx,
      }}
      {...other}
    />
  );
};

export { Chip };
