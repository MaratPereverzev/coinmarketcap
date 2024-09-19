import type { PopoverProps as PopoverPropsMUI } from "@mui/material";
import { Popover as PopoverMUI } from "@mui/material";
import { Box, Button } from "components";
import type { sxProp } from "components/types";
import { JSX, MouseEvent, useState } from "react";
import type { BoxProps } from "../Box";

export type PopoverProps = Omit<PopoverPropsMUI, "open" | "children"> & {
  children?: JSX.Element[];
  button?: React.JSX.Element | JSX.Element;
  closeOnClick?: boolean;
  sxPopover?: sxProp;
  sxButton?: sxProp;
  boxProps?: BoxProps;
  className?: String;
};

export const Popover = ({
  button,
  children,
  closeOnClick,
  sxPopover,
  sxButton,
  boxProps,
  className,
  ...other
}: PopoverProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
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
      <PopoverMUI
        open={open}
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
              children.map((child: JSX.Element, index: number) => {
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
      </PopoverMUI>
    </Box>
  );
};

