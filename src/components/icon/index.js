import { Box } from "../box";

const iconList = {
  arrowUp: "keyboard_arrow_up",
  arrowDown: "keyboard_arrow_down",
  default: "error",
};

const Default = (props) => {
  const { icon, sx, sxIcon, ...other } = props;

  return (
    <Box flex ai sx={{ ...sx }} {...other}>
      <span className="material-symbols-rounded span" style={sxIcon}>
        {iconList[icon ?? "default"]}
      </span>
    </Box>
  );
};

export { Default as Icon };
