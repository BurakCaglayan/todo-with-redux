export const isCompleted = (status) => (status === "COMPLETED" ? true : false);

export const getStatus = (status) => (status ? "COMPLETED" : "INCOMPLETED");
