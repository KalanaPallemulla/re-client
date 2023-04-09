
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import { combineReducers } from 'redux';
import appReducer from './reducer';


// initial states here
const initialState = {};

// middleware
const middleware = [thunk];

const rootReducer = combineReducers({
    appReducer
})
// creating store
export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
