import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import './Search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    const { value } = this.state;
    const { onSubmit } = this.props;
    return (
      <Paper  
        className="search" 
        elevation={1}
      >
        <form 
          noValidate 
          autoComplete="off"
          onSubmit= {(event) => {
            event.preventDefault();
            onSubmit(value)
          }}
        >
          <InputBase  
            className="search-input" 
            placeholder="Search Courses" 
            value={value}
            onChange={this.handleChange}
          />
          <IconButton 
            className="search-icon" 
            aria-label="Search"
            type="submit"
            value="Submit"
          >
            <SearchIcon />
          </IconButton>
        </form>
      </Paper>
    )
  }
}
export default Search;