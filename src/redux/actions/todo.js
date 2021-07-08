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

export const create = (data) => (dispatch) => {
  dispatch({
    type: "todo/pending",
  });

  fetch("http://localhost:5000/api/todos", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then(() => dispatch(list()));
};

export const remove = (id) => (dispatch) => {
  dispatch({
    type: "todo/pending",
  });

  fetch(`http://localhost:5000/api/todos/${id}`, {
    method: "DELETE",
  }).then(() => dispatch(list()));
};
