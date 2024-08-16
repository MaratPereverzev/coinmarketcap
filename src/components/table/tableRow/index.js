import { TableHead } from "../tableHead";
import { TableData } from "../tableData";

const TableRow = (props) => {
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
              data-cell={item.props?.dataCell}
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
