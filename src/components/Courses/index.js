import Courses from './Courses';
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => ({
	courses: state.courses,
})


export default connect(mapStateToProps, null)(Courses);