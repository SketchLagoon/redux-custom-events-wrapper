import { trigger } from "../../events";

interface ExampleComponentProps {
  buttonLabel: string;
}

const ExampleComponent = ({ buttonLabel }: ExampleComponentProps) => {
  return (
    <div className="example-component-wrapper">
      <h1>./src/components/ExampleComponent</h1>
      <h3>modify "test" key value pair on example state slice</h3>
      <button
        onClick={() => {
          trigger("EXAMPLE_COMPONENT_CLICK", {
            type: "ADD_TO_EXAMPLE_STATE",
            key: "test",
            value: "test first new value from ExampleComponent button click",
          });
        }}
      >
        first{buttonLabel}
      </button>

      <br />

      <button
        onClick={() => {
          trigger("EXAMPLE_COMPONENT_CLICK", {
            type: "ADD_TO_EXAMPLE_STATE",
            key: "test",
            value: "test second new value from ExampleComponent button click",
          });
        }}
      >
        second{buttonLabel}
      </button>

      <hr />
      <h3>add and modify "test1" key value pair on example state slice</h3>

      <button
        onClick={() => {
          trigger("EXAMPLE_COMPONENT_CLICK", {
            type: "ADD_TO_EXAMPLE_STATE",
            key: "test2",
            value: "test2 first value from ExampleComponent button click",
          });
        }}
      >
        1{buttonLabel}
      </button>

      <br />

      <button
        onClick={() => {
          trigger("EXAMPLE_COMPONENT_CLICK", {
            type: "ADD_TO_EXAMPLE_STATE",
            key: "test2",
            value: "test2 second value from ExampleComponent button click",
          });
        }}
      >
        2{buttonLabel}
      </button>
    </div>
  );
};

export default ExampleComponent;
