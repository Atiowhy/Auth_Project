import { combineReducers } from 'redux';
import LoginReducers from './loginRedux';
import RegisReducers from './regisRedux';

const rootReducers = combineReducers({
  LoginReducers,
  RegisReducers,
});
export default rootReducers;
