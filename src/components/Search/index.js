import Search from './Search';
import { connect } from 'react-redux';
import { onSearchSubmit } from '../../actions';


const mapDispatchToProps = dispatch => ({
  onSubmit(value) {
    dispatch(
      onSearchSubmit(value)
    )
  }
})


export default connect(null, mapDispatchToProps)(Search);