import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions';

const { SHOW_ALL } = VisibilityFilters;

const visibilityFilter = (state = SHOW_ALL, action) => {
  console.log(action.type);
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      console.log('retrun action is', action);
      return action.filter;
    default:
      console.log('return state is ', state);
      return state;
  }
};

export default visibilityFilter;
