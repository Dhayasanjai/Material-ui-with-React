import { TextField } from '@material-ui/core';

const Details = ({ detailChangeHandler, detailError, detail, classes }) => {
  return (
    <TextField
      label="Details"
      onBlur={detailChangeHandler}
      error={detailError}
      onChange={detailChangeHandler}
      variant="outlined"
      multiline
      required
      rows={3}
      fullWidth
      value={detail}
      className={classes.textField}
    />
  );
};
export default Details;
