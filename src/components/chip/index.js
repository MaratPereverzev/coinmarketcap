import { Text } from "../text";
const Chip = (props) => {
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
