import { TextField } from '@material-ui/core';

const Title = ({ titleChangeHandler, titleError, classes, title }) => {
  return (
    <TextField
      onChange={titleChangeHandler}
      onBlur={titleChangeHandler}
      color="secondary"
      label="Title"
      required
      variant="standard"
      fullWidth
      error={titleError}
      className={classes.field}
      value={title}
    />
  );
};
export default Title;
