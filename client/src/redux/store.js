import {applyMiddleware, combineReducers, createStore} from "redux";
import cardReducer from "./card-reducer";
import ThunkMiddleware from 'redux-thunk';

let reducer = combineReducers({
    card:cardReducer
})

let store = createStore(reducer, applyMiddleware(ThunkMiddleware));


export default store;