import { createStore } from 'redux';
import beverageInfo from './reducers';

const store = createStore( beverageInfo );

export default store;