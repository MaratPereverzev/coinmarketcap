const TableHead = (props) => {
  const { sx, caption, ...other } = props;
  return (
    <th className="tableHead" style={{ fontSize: "12px", ...sx }} {...other}>
      {caption ?? other?.children}
    </th>
  );
};

export { TableHead };
