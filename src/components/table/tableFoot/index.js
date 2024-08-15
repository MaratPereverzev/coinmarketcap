const TableFoot = (props) => {
  const { sx, value, ...other } = props;
  return (
    <tfoot className="tableFoot" style={{ fontSize: "12px", ...sx }} {...other}>
      {value ?? other?.children}
    </tfoot>
  );
};

export { TableFoot };
