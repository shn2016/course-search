import Pagination from './Pagination';
import { connect } from 'react-redux';
import { onPageNumberChange, onPageSizeChange } from '../../actions';

const mapStateToProps = (state, props) => ({
  pagination: state.pagination,
});

const mapDispatchToProps = dispatch => ({
  handleChangePage(number) {
    dispatch(
      onPageNumberChange(number)
    )
  },
  handleChangeRowsPerPage(size) {
    dispatch(
      onPageSizeChange(size)
    )
  }
})



export default connect(mapStateToProps,mapDispatchToProps )(Pagination);