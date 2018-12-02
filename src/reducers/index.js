import { combineReducers } from 'redux';
import terminalInfo from './terminalInfo';
import fullScreenInfo from './fullScreenInfo'


const rootReducer = combineReducers( {
  terminalInfo,
  fullScreenInfo,
} );
export default rootReducer;