import { Box } from "../box";
import { Text } from "../text";
import { Icon } from "../icon";

const Button = (props) => {
  const { caption, sx, sxText, sxBox, variant, icon, iconAtTheEnd, ...other } =
    props;

  if (variant === "text") {
    return (
      <Box
        flex
        sx={{
          cursor: "pointer",
          ...sx,
        }}
        {...other}
      >
        {icon && !iconAtTheEnd && <Icon icon={icon} />}
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
        >
          {caption && (
            <Text caption={caption} sx={{ padding: 0, margin: 0, ...sxText }} />
          )}
        </button>
        {icon && iconAtTheEnd && <Icon icon={icon} />}
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
