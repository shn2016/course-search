import Sidebar from './Sidebar';
import { connect } from 'react-redux'
import { onCategorySelected, onDifficultySelected } from '../../actions'

const mapStateToProps = (state, props) => 
	({
    selectedCategory: state.selectedCategory,
    selectedDifficulty: state.selectedDifficulty,
  });
  

const mapDispatchToProps = dispatch => (
  {
    onDifficultyChange(difficulty) {
      dispatch(
        onDifficultySelected(difficulty)
      )
    },
    onCategoryChange(category) {
      dispatch(
        onCategorySelected(category)
      )
    }
  }
)


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);