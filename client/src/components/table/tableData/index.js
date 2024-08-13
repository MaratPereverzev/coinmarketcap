const TableData = (props) => {
  const { sx, caption, ...other } = props;

  return (
    <td style={{ ...sx }} {...other}>
      {caption ?? other?.value ?? other?.children}
    </td>
  );
};

export { TableData };
