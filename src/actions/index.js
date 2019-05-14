import getCourses from '../services/getCourses';
import processData from '../utils/processData';
import C from '../store/constants';

export const onCategorySelected = category => (dispatch, getState) => {
  dispatch({
    type: C.CHANGE_CATEGORY,
    payload: category,
  });
  dispatch(fetchCourses());
}

export const onDifficultySelected = difficulty => (dispatch, getState) => {
  dispatch({
    type: C.CHANGE_DIFFICULTY,
    payload: difficulty,
  });

  dispatch(fetchCourses());
}

export const onSearchSubmit = input => (dispatch, getState) => {
  dispatch({
    type: C.CHANGE_SEARCH,
    payload: input,
  });

  dispatch(fetchCourses());
}

export const onPageNumberChange = number => (dispatch, getState) => {
  dispatch({
    type: C.CHANGE_PAGE_NUMBER,
    payload: number
  });

  dispatch(fetchCourses());
}

export const onPageSizeChange = size => (dispatch, getState) => {
  dispatch({
    type: C.CHANGE_PAGE_SIZE,
    payload: size
  });

  dispatch(fetchCourses());
}

export const fetchCourses = () => (dispatch, getState) => {
  dispatch({
    type: C.FETCH_COURSES
  });
  
  const { selectedCategory, selectedDifficulty, searchInput, pagination } = getState();
  const { number, size }  = pagination;

  getCourses(selectedCategory, selectedDifficulty, searchInput)
    .then(({ data }) => {
      const results = processData(data);
      const showed = results.slice((number-1)*size, number*size);
      dispatch({
        type: C.CHANGE_COURSES,
        payload: showed
      });
      dispatch({
        type: C.CHANGE_PAGE_TOTAL,
        payload: results.length
      });
    })
}