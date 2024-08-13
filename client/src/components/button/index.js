import "./styles.css";
import { Box } from "../box";

const Button = (props) => {
  const { caption, sx, ...other } = props;
  return (
    <Box>
      <button style={{ ...sx }} {...other}>
        {caption}
      </button>
    </Box>
  );
};

export { Button };
