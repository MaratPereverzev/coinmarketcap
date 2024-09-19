import type { sxProp } from "components/types";
import { HTMLAttributes, JSX } from "react";

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  sx?: sxProp;
  caption?: string | number;
};

const Text = ({ sx, caption, ...other }: TextProps): JSX.Element => {
  return (
    <p style={{ ...sx }} {...other}>
      {caption}
    </p>
  );
};

export { Text };

