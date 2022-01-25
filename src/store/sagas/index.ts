import { all } from "redux-saga/effects";
import todosSagas from "./todos";

const rootSaga = function* rootSaga() {
  yield all([...todosSagas]);
};

export default rootSaga;
