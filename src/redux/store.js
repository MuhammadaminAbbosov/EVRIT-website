import {applyMiddleware, combineReducers, createStore} from "redux";
import {Reducer} from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    Reducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))