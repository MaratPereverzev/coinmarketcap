const TableData = (props) => {
  const { sx, value, ...other } = props;

  return (
    <td style={{ ...sx }} {...other}>
      {value ?? other?.children}
    </td>
  );
};

export { TableData };
