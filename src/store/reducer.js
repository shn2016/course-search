import C from './constants';
import { combineReducers } from 'redux'

export const selectedCategory = (state="", action) => (
  (action.type === C.CHANGE_CATEGORY) ?
    action.payload :
    state
);

export const selectedDifficulty = (state="", action) => (
  (action.type === C.CHANGE_DIFFICULTY) ?
    action.payload :
    state
);

export const searchInput = (state="", action) => (
  (action.type === C.CHANGE_SEARCH) ?
    action.payload :
    state
);

// this one should be separated.
export const pagination = (state={size:10, number:1, total:0}, action) => {
  switch(action.type) {
    case C.CHANGE_PAGE_SIZE : {
      state.size = action.payload;
      return Object.assign({}, state);
    }
    case C.CHANGE_PAGE_NUMBER : {
      state.number = action.payload;
      return Object.assign({}, state);
    }
    case C.CHANGE_PAGE_TOTAL :  {
      state.total = action.payload;
      return Object.assign({}, state);
    }
    default:
      return state
  }

}

export const fetching = (state=false, action) => {
  switch(action.type) {
    case C.FETCH_COURSES :
      return true
    case C.CANCEL_FETCHING :
      return false 
    case C.CHANGE_COURSES :
      return false   
    default:
      return state
  }
};

export const results = (state=[], action) => (
  (action.type === C.CHANGE_COURSES) ?
    action.payload :
    state
);

export default combineReducers({
  pagination,
  searchInput,
  selectedCategory,
  selectedDifficulty,
  courses: combineReducers({
    fetching,
    results
  })
})