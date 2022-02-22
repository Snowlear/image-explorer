import { createStore, combineReducers } from "redux";
import SessionReducer from "./reducers/session";

const reducers = combineReducers({
  session: SessionReducer,
});

const store = createStore(reducers);

export default store;
