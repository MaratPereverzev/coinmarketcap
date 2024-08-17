const Text = (props) => {
  const { sx, caption, ...other } = props;

  return (
    <p style={{ ...sx }} {...other}>
      {caption}
    </p>
  );
};

export { Text };
