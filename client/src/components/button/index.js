import "./styles.css";
import { Box } from "../box";
import { Text } from "../text";

const Button = (props) => {
  const { caption, sx, sxText, variant, ...other } = props;

  if (variant === "text") {
    return (
      <Box>
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            fontWeight: "700",
            cursor: "pointer",
            ...sx,
          }}
          {...other}
        >
          {caption && <Text caption={caption} sx={{ ...sxText }} />}
        </button>
      </Box>
    );
  } else {
    return (
      <Box>
        <button style={{ ...sx }} {...other}>
          {caption && <Text caption={caption} />}
        </button>
      </Box>
    );
  }
};

export { Button };
