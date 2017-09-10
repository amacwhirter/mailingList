import {combineReducers} from 'Redux';
import contacts from './contactReducer';
import groups from './groupReducer';
import emails from './composeReducer';

const rootReducer = combineReducers({
  contacts,
  groups,
  emails
});

export default rootReducer;
