import { applyMiddleware,legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import { authReducers } from "./reducers";



 const store =legacy_createStore(authReducers,applyMiddleware(thunk));
 export default store;


