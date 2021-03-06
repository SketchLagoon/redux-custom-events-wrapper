import { useEffect } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";

import store from "./store";

import { ExampleComponent } from "./components";

import { on, off } from "./events";

function ExampleApp() {
  const dispatch = useDispatch();
  const allState = useSelector((state) => state);

  const reduxDispatcher = (event: any) => {
    dispatch(event.detail);
    console.log(allState);
  };

  useEffect(() => {
    on("EXAMPLE_COMPONENT_CLICK", reduxDispatcher);
    console.log(allState);

    return () => {
      off("EXAMPLE_COMPONENT_CLICK", reduxDispatcher);
    };
  }, []);

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
