import { TableHead } from "../tableHead";
import { TableData } from "../tableData";

const TableRow = (props) => {
  const { sx, values, isHead, ...other } = props;

  if (Array.isArray(values) && values.length > 0) {
    if (isHead) {
      return (
        <tr
          className="tableRow"
          style={{ borderBottom: "1px solid #dddddd", ...sx }}
        >
          {values.map((value, index) => {
            const caption = typeof value === "string" ? value : value?.caption;

            return (
              <TableHead key={index} caption={caption} sx={{ ...value?.sx }} />
            );
          })}
        </tr>
      );
    }

    return (
      <tr className="tableRow" style={{ ...sx }}>
        {values.map((value, index) => {
          const caption = typeof value === "string" ? value : value?.caption;

          return (
            <TableData
              key={index}
              data-cell={value?.dataCell}
              caption={caption}
              sx={{ borderBottom: "1px solid #dddddd", ...value?.sx }}
            />
          );
        })}
      </tr>
    );
  }

  return (
    <tr
      className="tableRow"
      style={{ borderBottom: "1px solid #dddddd", ...sx }}
    >
      {other.children}
    </tr>
  );
};

export { TableRow };
