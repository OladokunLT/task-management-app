// import React from 'react';
import { useReducer, useState } from "react";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Swal from 'sweetalert2'
import { ACTIONS } from "./ACTIONS";
import Task from "./Task";
import { reducer } from "./reducer";
import { Add, ArrowDownward } from "@mui/icons-material";

const TaskManager = () => {
  const [allTask, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [createTask, setCreateTask] = useState(false);

  const handleCreateTask = (() => {
    setCreateTask(!createTask)
  })
    // console.log(createTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TASK,
      payload: { name: name, dueDate: dueDate },
    });

    Swal.fire(
      'Success!',
      'New task added!',
      'success'
    )

    setCreateTask(false)
    setName("");
    setDueDate("");
  };

  return (
    <main className="container w-11/12 mx-auto">
      <h1 className="font-bold text-xl py-4">Task Manager</h1>
      <button onClick={handleCreateTask}
        className="w-full my-2 text-blue-700 bg-white rounded-md py-4 p-1 font-bold flex items-center gap-2 shadow-md hover:bg-blue-50 transition-all hover:outline-blue-700 focus:outline-blue-700"
      > < Add /> Create Task </button>
      {
        createTask && (
        <form onSubmit={handleSubmit} 
          className="w-full bg-slate-50 px-2 rounded-md shadow"
        >
          <fieldset className="field-wrap">
            <legend className="blend-legend" htmlFor="task-name">
              Task name
            </legend>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Add a task"
              id="task-name"
              className="flex w-full shadow flex-grow p-2 mb-2 rounded-md hover:shadow hover:bg-blue-50 hover:outline-blue-700 focus:outline-blue-700"
            />
          </fieldset>
          <div className="date-submit flex gap-3">
            <fieldset className="field-wrap ">
              <legend className="">Due date</legend>
              <input
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                type="date"
                required
                title="Select due date"
                className="p-2 shadow rounded-md mb-2 hover:cursor-pointer hover:bg-blue-50 hover:outline-blue-700 focus:outline-blue-700"
              />
            </fieldset>
            <fieldset className="field-wrap">
              <legend className="blend-legend">Add task</legend>
              <button type="submit" title="Add task to list" 
                className="flex justify-center gap-1 px-2 py-[9px] bg-white hover:text-blue-500 hover:bg-blue-50 hover:font-bold hover:shadow-md rounded-md hover:outline-blue-700 focus:outline-blue-700 shadow"
              >
                Add task <ArrowDownward />              
              </button>
            </fieldset>
          </div>
        </form>

        )
      }
      

      {allTask.map((task) => {
        return <Task key={task.id} task={task} dispatch={dispatch} />;
      })}
    </main>
  );
};

export default TaskManager;
