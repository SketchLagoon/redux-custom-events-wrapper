import { useEffect } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";

import store, { RootState } from "./store";

import { ExampleComponent } from "./components";

function ExampleApp() {
  // const dispatch = useDispatch();
  // const todos = useSelector((state: RootState) => state.todos);
  const rootState = useSelector((state: RootState) => state.rootState);

  useEffect(() => {
    // dispatch({ type: "TODOS_FETCH_REQUESTED" });
    // dispatch({
    //   type: "ADD_TO_ROOT_STATE",
    //   key: "test",
    //   value: "new value from App.tsx useEffect",
    // });
    console.log(rootState);
  }, []);

  // console.log(todos);
  // console.log(rootState);

  return (
    <div className="App">
      {/* {JSON.stringify(todos)} */}
      <ExampleComponent buttonLabel="ExampleComponent buttonLabel" />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ExampleApp />
    </Provider>
  );
}

export default App;
