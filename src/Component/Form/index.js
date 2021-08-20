import { firestore, timeStamp } from '../../config';
import { useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import Category from './Category';
import Title from './Title';
import Details from './Details';
const Form = ({ classes }) => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [titleTouched, setTitleTouched] = useState(false);
  const [detailTouched, setDetailTouched] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  const [category, setCategory] = useState('Todo');

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!titleError && !detailError && titleTouched && detailTouched) {
      const createdAt = timeStamp();
      firestore
        .collection('material-ui-learning')
        .add({
          title,
          createdAt,

          detail,
          category,
        })

        .then(() => history.push('/'))
        .catch((err) => console.log(err));
    }
  };
  const titleChangeHandler = (e) => {
    setTitleTouched(true);
    setTitle(e.target.value);
    setTitleError(e.target.value === '');
  };
  const detailChangeHandler = (e) => {
    setDetailTouched(true);
    setDetail(e.target.value);
    setDetailError(e.target.value === '');
  };
  return (
    <form noValidate onSubmit={formSubmitHandler}>
      <Title
        titleChangeHandler={titleChangeHandler}
        titleError={titleError}
        title={title}
        classes={classes}
      />
      <Details
        detailChangeHandler={detailChangeHandler}
        detailError={detailError}
        detail={detail}
        classes={classes}
      />
      <Category
        setCategory={setCategory}
        category={category}
        classes={classes}
      ></Category>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        endIcon={<ArrowForwardIosIcon />}
      >
        Submit
      </Button>
    </form>
  );
};
export default Form;
//its  only used for development purpose
// fetch('http://localhost:3004/notes', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'helop',
//     id: 45,
//     detail: 'jieie',
//     category: 'money',
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
