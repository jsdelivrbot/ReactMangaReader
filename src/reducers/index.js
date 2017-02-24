import { combineReducers } from 'redux';
import MangaReducer from './reducer_manga';

const rootReducer = combineReducers({
  manga: MangaReducer
});

export default rootReducer;
