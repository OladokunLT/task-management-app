import { ACTIONS } from "./ACTIONS";
import { newTask } from "./newTask";

export function reducer(allTask, action) {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return [...allTask, newTask(action.payload.name, action.payload.dueDate)];

    case ACTIONS.TOGGLE_TASK:
      return allTask.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, complete: !task.complete };
        }
        return task;
      });
    case ACTIONS.DELETE_TASK:
      return allTask.filter((task) => task.id !== action.payload.id);
    default:
      return allTask;
  }
}
