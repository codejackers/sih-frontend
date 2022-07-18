import { CHANGE_SEARCH_BAR } from "../actions/actionTypes";

const initialChangeState = {
  searchbar: false,
};

export default function changes(state = initialChangeState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_BAR:
      return {
        ...state,
        searchbar: action.data,
      };
    default:
      return state;
  }
}
