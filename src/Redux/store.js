import { createStore } from "redux";
import  addReducer from "./reducer";

export const store=createStore(addReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());