export const todoReducer = (state = { todos: [], pending: false }, action) => {
  switch (action.type) {
    case "todo/list":
      return { ...state, todos: action.payload, pending: false };
    case "todo/pending":
      return { ...state, pending: true };
    default:
      return state;
  }
};
