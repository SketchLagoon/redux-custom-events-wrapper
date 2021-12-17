import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

import { on, off, trigger } from "../../events";

interface ExampleComponentProps {
  buttonLabel: string;
}

const ExampleComponent = ({ buttonLabel }: ExampleComponentProps) => {
  const dispatch = useDispatch();
  const rootState = useSelector((state: RootState) => state.rootState);

  const exampleComponentClickHandler = (event: any) => {
    dispatch(event.detail);
    console.log(rootState);
  };

  useEffect(() => {
    on("EXAMPLE_COMPONENT_CLICK", exampleComponentClickHandler);

    return () => {
      off("EXAMPLE_COMPONENT_CLICK", exampleComponentClickHandler);
    };
  }, []);

  return (
    <div className="example-component-wrapper">
      <h1>Example Component</h1>

      <button
        onClick={() => {
          trigger("EXAMPLE_COMPONENT_CLICK", {
            type: "ADD_TO_ROOT_STATE",
            key: "test",
            value: "first new value from ExampleComponent button click",
          });
        }}
      >
        first{buttonLabel}
      </button>

      <button
        onClick={() => {
          trigger("EXAMPLE_COMPONENT_CLICK", {
            type: "ADD_TO_ROOT_STATE",
            key: "test",
            value: "second new value from ExampleComponent button click",
          });
        }}
      >
        second{buttonLabel}
      </button>
    </div>
  );
};

export default ExampleComponent;
