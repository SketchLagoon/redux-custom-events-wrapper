import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const allMiddleware = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...allMiddleware));

// sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export { rootReducer, rootSaga };
export default store;
