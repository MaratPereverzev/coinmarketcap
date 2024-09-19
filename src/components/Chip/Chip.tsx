import type { sxProp } from "components/types";
import {JSX, HTMLAttributes} from "react";
import { Text } from "components/Text";

type ChipProps = HTMLAttributes<HTMLParagraphElement> & {
  sx?: sxProp;
  caption: string;
};

const defaultSx = {
  backgroundColor: "#ededed",
  width: "max-content",
  margin: 0,
  padding: "5px",
  fontWeight: "500",
  borderRadius: "20px",
}

export const Chip = (props: ChipProps): JSX.Element => {
  const { sx, caption, ...other } = props;

  return (
    <Text
      caption={caption}
      sx={{
        ...defaultSx,
        ...sx,
      }}
      {...other}
    />
  );
};
