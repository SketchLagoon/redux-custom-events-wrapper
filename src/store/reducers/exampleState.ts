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

export default exampleState;
