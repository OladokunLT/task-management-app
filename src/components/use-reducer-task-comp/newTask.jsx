
export const newTask = (name, dueDate) => {
  return {
    id: new Date().getTime().toString(),
    name: name,
    dueDate: dueDate,
    complete: false,
  };
};
