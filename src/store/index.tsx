import { createStore, combineReducers } from "redux";
import reducer from "./reducers/counter";
import CounterReducer from "./reducers/counter";

const reducers = combineReducers({
  counter: CounterReducer,
});

const store = createStore(reducer);

export default store;
