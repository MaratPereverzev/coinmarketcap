import type { sxProp } from "components/types";
import { JSX } from "react";
import { TableData } from "../TableData";
import { TableHead } from "../TableHead";

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> & {
  sx?: sxProp;
  items?: string | number | JSX.Element;
  isHead?: boolean;
};

export const TableRow = ({ sx, items, isHead, ...other }: TableRowProps): JSX.Element => {
  const style = {
    borderBottom: "1px solid #dddddd",
    ...sx,
  };

  if (Array.isArray(items) && items.length > 0) {
    if (isHead) {
      return (
        <tr className="tableRow" style={style} {...other}>
          {items.map((item, index) => {
            return (
              <TableHead
                key={index}
                value={item?.value ?? item}
                sx={{ ...item?.sx }}
              />
            );
          })}
        </tr>
      );
    }

    return (
      <tr className="tableRow" style={style} {...other}>
        {items.map((item, index) => {
          return (
            <TableData
              key={index}
              data-cell={item.props?.datacell}
              value={item?.value ?? item}
              style={{ ...style, ...item?.sx }}
            />
          );
        })}
      </tr>
    );
  }

  return (
    <tr className="tableRow" style={style} {...other}>
      {other.children}
    </tr>
  );
};
