const TableHead = (props) => {
  const { sx, value, ...other } = props;
  return (
    <th className="tableHead" style={{ fontSize: "12px", ...sx }} {...other}>
      {value ?? other?.children}
    </th>
  );
};

export { TableHead };
