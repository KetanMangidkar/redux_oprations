import { countReducer } from "./Counter/reducer";
import { combineReducers, legacy_createStore } from "redux";
import { todoReducer } from "./todos/reducer";

const rootReducer = combineReducers({
  counter: countReducer,
  todos: todoReducer,
});

const store = legacy_createStore(rootReducer);

export default store;
