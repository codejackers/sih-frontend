import { CHANGE_SEARCH_BAR, SAVE_COLLEGE_DATA } from "../actions/actionTypes";

const initialChangeState = {
  searchbar: false,
  colleges: [],
};

export default function changes(state = initialChangeState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_BAR:
      return {
        ...state,
        searchbar: action.data,
      };
    case SAVE_COLLEGE_DATA:
      return {
        ...state,
        colleges: action.data,
      };
    default:
      return state;
  }
}
