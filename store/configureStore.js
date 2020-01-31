import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import itemsReducer from './reducers/itemsReducer';

const rootReducer = combineReducers({items: itemsReducer});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
