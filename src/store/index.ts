import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { todosReducer, todosSagas } from "./todos";

const rootState = (
  state = { test: "default value" },
  action: { type: "ADD_TO_ROOT_STATE"; key: string; value: any }
) => {
  switch (action.type) {
    case "ADD_TO_ROOT_STATE":
      return Object.assign(state, { ...state, [action.key]: action.value });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  rootState,
  todos: todosReducer,
});

const rootSaga = function* rootSaga() {
  yield all([...todosSagas]);
};

const sagaMiddleware = createSagaMiddleware();

const allMiddleware = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...allMiddleware));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export { rootReducer, rootSaga };
export default store;
