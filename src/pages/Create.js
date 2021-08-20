import { makeStyles, Container, Typography } from '@material-ui/core';
import Form from '../Component/Form';

const useStyle = makeStyles({
  title: {
    color: 'purple',
    marginTop: '10px',
  },
  field: {
    marginTop: '10px',
    marginBottom: '10px',
    display: 'block',
  },
});

const Create = () => {
  const classes = useStyle();
  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        component="h1"
        color="textSecondary"
        gutterBottom
      >
        Create a new One
      </Typography>
      <Form classes={classes} />
    </Container>
  );
};

export default Create;
