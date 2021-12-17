import { call, fork, put, takeEvery, select } from "redux-saga/effects";
import { Todo, getTodos } from "../../mockAPI";

function* getTodosAction() {
  const todos: Todo[] = yield call(getTodos);
  yield put({ type: "TODOS_FETCH_SUCCEEDED", payload: todos });
}

function* watchTodos() {
  yield takeEvery("TODOS_FETCH_REQUESTED", getTodosAction);
}

const todosSagas = [fork(watchTodos)];

export default todosSagas;
