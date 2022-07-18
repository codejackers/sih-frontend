import { CHANGE_SEARCH_BAR } from "./actionTypes";

export function changeSearchBar(data) {
  return {
    type: CHANGE_SEARCH_BAR,
    data,
  };
}
