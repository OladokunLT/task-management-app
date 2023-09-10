/* eslint-disable react/prop-types */
// import React from 'react';
import { ACTIONS } from './TaskManager';
import "./Task.css"

const Task = ({ task, dispatch }) => {
  return (
    <div className='task-container'>
      <button className="mark-done">
        <input type="checkbox" name="" id="" onClick={()=>dispatch({ type:ACTIONS.TOGGLE_TASK, payload:{id:task.id} })} title='Mark as Done/Undone' />
        <small>Done<br></br>Undone</small>
      </button>
      <div>
        <span
          style = {{color: task.complete ? '#AAA' : "#000" }}
        >
          {task.name}
        </span>
        <span> {task.dueDate} </span>
      </div>
      <button onClick={()=>dispatch({ type:ACTIONS.DELETE_TASK, payload:{id:task.id} })} >Delete</button>
    </div>
  );
}

export default Task;
