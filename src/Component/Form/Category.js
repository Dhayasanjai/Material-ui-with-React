import React from 'react';

import {
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from '@material-ui/core';

const Category = ({ category, setCategory, classes }) => {
  return (
    <FormControl className={classes.field}>
      <FormLabel>note Category</FormLabel>
      <RadioGroup
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <FormControlLabel control={<Radio />} label="Money" value="Money" />
        <FormControlLabel control={<Radio />} label="Todo" value="Todo" />
        <FormControlLabel
          control={<Radio />}
          label="Remainder"
          value="Remainder"
        />
        <FormControlLabel control={<Radio />} label="Work" value="Work" />
      </RadioGroup>
    </FormControl>
  );
};
export default Category;
