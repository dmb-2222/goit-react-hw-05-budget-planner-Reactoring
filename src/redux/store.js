import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./reducer";

const rootReducer = combineReducers({
  budget: reducer,
});
const store = createStore(rootReducer , devToolsEnhancer());

export default store;
