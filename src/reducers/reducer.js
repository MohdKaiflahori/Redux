// eslint-disable-next-line default-param-last
const Counter = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'Increase': return {
      ...state,
      counter: state.counter + 1,
    };
    case 'Decrease': return {
      ...state,
      counter: state.counter - 1,
    };
    default:
      return state;
  }
};
export default Counter;
