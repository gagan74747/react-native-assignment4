import {createStore, combineReducers, applyMiddleware} from 'redux';
import {channelReducer} from './Channels/reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({channelReducer});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
