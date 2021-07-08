const BASE_URL = process.env.NODE_ENV === "production" ? process.env.REACT_APP_BASE_URL : "http://localhost:5000/api";

export const list = () => (dispatch) => {
  dispatch({
    type: "todo/pending",
  });

  fetch(`${BASE_URL}/todos/list`)
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

  fetch(`${BASE_URL}/todos`, {
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

  fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
  }).then(() => dispatch(list()));
};

export const update = (id, data) => (dispatch) => {
  dispatch({
    type: "todo/pending",
  });

  fetch(`${BASE_URL}/todos/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(data),
  }).then(() => dispatch(list()));
};

export const changeFilter = (status) => (dispatch) => {
  dispatch({
    type: "todo/filter",
    payload: status,
  });

  dispatch(list());
};
