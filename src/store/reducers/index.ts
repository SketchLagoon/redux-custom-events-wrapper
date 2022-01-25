import { combineReducers } from "redux";
import todosReducer from "./todos";
import exampleState from "./exampleState";

const rootReducer = combineReducers({
  example: exampleState,
  todos: todosReducer,
});

export default rootReducer;
