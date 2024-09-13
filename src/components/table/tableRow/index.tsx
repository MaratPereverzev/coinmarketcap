import { TableHead } from "../tableHead";
import { TableData } from "../tableData";
import React from "react"
import type { sxProp } from "../../types";

type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> & {
  sx?: sxProp;
  items?: string | number | JSX.Element | React.JSX.Element;
  isHead?: boolean;
};

const TableRow = (props: TableRowProps): React.JSX.Element => {
  const { sx, items, isHead, ...other } = props;
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

export { TableRow };
