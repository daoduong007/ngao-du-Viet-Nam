import {  createStore} from 'redux';
import {rootReducer} from '@redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const composeEnhancers  = composeWithDevTools();


const store = createStore(rootReducer,composeEnhancers);
export default store;

export * from './reducer';
export * from './actions';
export * from './selectors'