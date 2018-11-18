import { createStore } from 'redux';
import beverageInfo from './reducers/beverageInfo';

const store = createStore(beverageInfo);

export default store;
