import React from "react"
import { TextProps } from "@/utils";

const Text = (props: TextProps): React.JSX.Element => {
  const { sx, caption, ...other } = props;

  return (
    <p style={{ ...sx }} {...other}>
      {caption}
    </p>
  );
};

export { Text };
