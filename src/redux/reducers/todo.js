export const todoReducer = (
  state = { allData: [], todos: [], filter: { status: "ALL" }, pending: false },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case "todo/list":
      return {
        ...state,
        allData: payload,
        todos:
          state.filter.status === "ALL"
            ? payload
            : payload.filter((item) => item.status === state.filter.status),
        pending: false,
      };
    case "todo/pending":
      return { ...state, pending: true };
    case "todo/filter":
      return {
        ...state,
        filter: {
          ...state.filter,
          status: payload,
        },
      };
    default:
      return state;
  }
};
