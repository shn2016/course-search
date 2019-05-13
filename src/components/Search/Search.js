import React from 'react';
import TextField from '@material-ui/core/TextField';

const Search = ({value=''}) => (
  <form 
    noValidate 
    autoComplete="off"
    onSubmit= {() => {
      this.event.preventDefault();
      console.log(`${value} submited`)
    }}
  >  
    <TextField
      id="outlined-full-width"
      label="Search"
      style={{ margin: 8 }}
      placeholder="search interested courses"
      fullWidth
      margin="normal"
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
    />
  </form>
);

export default Search;