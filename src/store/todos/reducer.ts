import { Todo } from "../../mockAPI";

// const INITIAL_STATE = {
//     todos: [],
// }

const todosReducer = (
  state: Todo[] = [],
  action: { type: "TODOS_FETCH_SUCCEEDED"; payload: Todo[] }
) => {
  switch (action.type) {
    case "TODOS_FETCH_SUCCEEDED":
      return action.payload;
    default:
      return state;
  }
};

export default todosReducer;
