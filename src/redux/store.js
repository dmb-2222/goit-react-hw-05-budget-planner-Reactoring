import { createStore, combineReducers, applyMiddleware } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { composeWithDevTools } from "redux-devtools-extension";
import { budgetReducer, expenseReducer } from "./reducer";
// import logger from "./middleware/logger";
import throttle from "./middleware/throttle";
import logger from "redux-logger";
import stateValidator from './middleware/state-validation'

const rootReducer = combineReducers({
  budget: budgetReducer,
  expenseList: expenseReducer
});
const enhancer = applyMiddleware(throttle, logger, stateValidator);
const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
