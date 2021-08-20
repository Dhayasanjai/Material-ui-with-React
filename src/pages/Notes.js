import { firestore } from '../config';
import { useState, useEffect } from 'react';
import { Grid, Container } from '@material-ui/core';
import NotesCard from '../Component/NotesCard';
import Masonry from 'react-masonry-css';
const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    //used for getting data from internal server
    // npm install -g json-server
    //json-server --watch data/db.json --port 8000
    // fetch('http://localhost:3004/notes')
    //   .then((res) => res.json())
    //   .then((data) => setNotes(data));
    firestore
      .collection('material-ui-learning')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let fetchedNotes = [];
        snap.forEach((docs) => {
          fetchedNotes.push({ ...docs.data(), id: docs.id });
        });
        setNotes(fetchedNotes);
      });
  }, []);
  const breakPoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <Container>
      {/* <Grid
        container
        spacing={2}
        // justifyContent="space-around"
        // alignItems="center"
      >
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} lg={3} md={6}>
            <NotesCard note={note} />
          </Grid>
        ))}
      </Grid> */}
      {/*npm install react-masonry-css */}
      <Masonry
        breakpointCols={breakPoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div item key={note.id} xs={12} lg={3} md={6}>
            <NotesCard note={note} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};
export default Notes;
