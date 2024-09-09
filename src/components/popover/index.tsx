import { Box, Button } from "@/components";
import { PopoverProps } from "@/utils/types";
import { Popover } from "@mui/material";
import React from "react";

const Default = (props: PopoverProps): React.JSX.Element => {
  const {
    button,
    children,
    closeOnClick,
    sxPopover,
    sxButton,
    boxProps,
    className,
    ...other
  } = props;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = !!anchorEl;

  return (
    <Box flex>
      {button ? (
        <button.type
          {...button.props}
          onClick={handleClick}
          sx={{ ...sxButton }}
          className={className}
        />
      ) : (
        <Button
          onClick={handleClick}
          sx={{ ...sxButton }}
          className={className}
        />
      )}
      <Popover
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        {...other}
      >
        {children && (
          <Box flex column sx={{ ...sxPopover }} {...boxProps}>
            {
              children.map((child, index) => {
                if (typeof child === "boolean" && child === false) return null;
                return (
                  <child.type
                    key={index}
                    {...child.props}
                    onClick={() => {
                      if (child.props?.onClick) child.props.onClick();
                      if (closeOnClick) handleClose();
                    }}
                  />
                );
              })
            }
          </Box>
        )}
      </Popover>
    </Box>
  );
};

export { Default as Popover };

