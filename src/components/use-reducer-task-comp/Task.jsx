/* eslint-disable react/prop-types */
// import React from 'react';

import { ACTIONS } from './TaskManager';
import "./Task.css"
import { Delete } from '@mui/icons-material';

const Task = ({ task, dispatch }) => {
  return (
    <div className='task-container'>
      <button className="mark-done" >
        <input type="checkbox" name="" onClick={()=>dispatch({ type:ACTIONS.TOGGLE_TASK, payload:{id:task.id} })} title='Mark as Done/Undone' />        
        <small>Mark (un)done</small>      
      </button>
      <div>
        <span
          style = {{color: task.complete ? '#2A2' : "#000" }}
        >
          {task.name}
        </span>
        <span> {task.dueDate} </span>
      </div>
      <button onClick={()=>dispatch({ type:ACTIONS.DELETE_TASK, payload:{id:task.id} })} className='delete'> <Delete /> <br /> Delete</button>
    </div>
  );
}

export default Task;
