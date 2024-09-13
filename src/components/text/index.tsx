import React from "react"
import type { sxProp } from "../types";

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  sx?: sxProp;
  caption?: string | number;
};

const Text = (props: TextProps): React.JSX.Element => {
  const { sx, caption, ...other } = props;

  return (
    <p style={{ ...sx }} {...other}>
      {caption}
    </p>
  );
};

export { Text };
