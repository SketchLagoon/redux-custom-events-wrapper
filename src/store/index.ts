import { createStore, combineReducers } from "redux";

// ==========
//  Creating some other reducer to add to the rootReducer
// ==========
// import { Todo } from "../mockAPI";
// const todosReducer = (
//   state: Todo[] = [],
//   action: { type: "TODOS_FETCH_SUCCEEDED"; payload: Todo[] }
// ) => {
//   switch (action.type) {
//     case "TODOS_FETCH_SUCCEEDED":
//       return action.payload;
//     default:
//       return state;
//   }
// };

const exampleState = (
  state = { test: "default value" },
  action: { type: "ADD_TO_EXAMPLE_STATE"; key: string; value: any }
) => {
  switch (action.type) {
    case "ADD_TO_EXAMPLE_STATE":
      return Object.assign(state, { ...state, [action.key]: action.value });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  example: exampleState,

  // ==========
  //  Adding some other reducer to the rootReducer
  // ==========

  //   todos: todosReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export { rootReducer };
export default store;
