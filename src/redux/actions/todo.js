export const list = () => (dispatch) => {
  dispatch({
    type: "todo/pending",
  });

  fetch("http://localhost:5000/api/todos/list")
    .then((res) => res.json())
    .then((todos) =>
      dispatch({
        type: "todo/list",
        payload: todos,
      })
    );
};
