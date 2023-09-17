/* eslint-disable react/prop-types */
// import React from 'react';


import { ACTIONS } from "./ACTIONS";
import { CalendarMonth, Delete } from '@mui/icons-material';

const Task = ({ task, dispatch }) => {
  return (
    <div className='flex bg-white justify-between items-center my-2 p-2 rounded-lg shadow-md hover:bg-blue-50 transition-all' >
      <button className="flex flex-col gap-1 items-center hover:text-green-700 hover:font-bold"  title="check-box">
        <input type="checkbox"  name="" onClick={()=>dispatch({ type:ACTIONS.TOGGLE_TASK, payload:{id:task.id} })} title='Un(done)' />        
        <small>(Un)done</small>      
      </button>
      <div className="flex flex-col items-center gap-1 font-semibold">
        <span
          style = {{color: task.complete ? '#2A2' : "#000" }}
        >
          {task.name}
        </span>
        <small> Due: < CalendarMonth /> {task.dueDate} </small>
      </div>
      <button onClick={()=>dispatch({ type:ACTIONS.DELETE_TASK, payload:{id:task.id} })} title="Delete task" className='hover:text-red-500 hover:font-bold'> <Delete /> <br /><small>Delete</small> </button>
    </div>
  );
}

export default Task;
