import { createStore, combineReducers, applyMiddleware } from "redux";
// import { logger }  from "redux-logger";

import test from "./reducers/testReducer"

export default createStore(
    combineReducers({test}), 
    applyMiddleware() 
);