import {SEARCH_MANGA, GET_MANGA, GET_CHAPTER} from '../actions/index';

const INITIAL_STATE = {
  results: [],
  manga: null,
  pages: []
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SEARCH_MANGA:
      return { ...state, results: action.payload.data };
    case GET_MANGA:
      return { ...state, manga: action.payload.data };
    case GET_CHAPTER:
      return { ...state, pages: action.payload.data };
    default:
      return state;
  }
}
