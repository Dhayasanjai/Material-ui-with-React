import {
  IconButton,
  Card,
  CardHeader,
  CardContent,
  Typography,
  makeStyles,
  Avatar,
} from '@material-ui/core';
import { blueGrey, green, pink, yellow } from '@material-ui/core/colors';
import { DeleteOutlined } from '@material-ui/icons';
import { firestore } from '../config';
const useStyles = makeStyles({
  type: {
    border: (note) => {
      if (note.category === 'Work') {
        return '1px solid red';
      } else {
        return '1px solid gray';
      }
    },
  },
  avatar: {
    backgroundColor: (note) => {
      if (note.category === 'Work') {
        return yellow[700];
      }
      if (note.category === 'Money') {
        return green[500];
      }
      if (note.category === 'Todo') {
        return pink[400];
      }
      if (note.category === 'Remainder') {
        return blueGrey[600];
      }
    },
  },
});
const NotesCard = ({ note }) => {
  const classes = useStyles(note);
  const deleteHandler = () => {
    firestore.collection('material-ui-learning').doc(note.id).delete();
  };
  return (
    <div>
      <Card elevation={2} className={classes.type}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>{note.category[0]}</Avatar>
          }
          action={
            <IconButton onClick={deleteHandler}>
              <DeleteOutlined></DeleteOutlined>
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.detail}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default NotesCard;
