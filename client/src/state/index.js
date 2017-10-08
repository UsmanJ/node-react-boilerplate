import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import enableDevTools from '../util/enableReduxDevtool';

const enhancer = compose(applyMiddleware(thunk), enableDevTools);

const store = createStore(reducers, enhancer);

export default store;
