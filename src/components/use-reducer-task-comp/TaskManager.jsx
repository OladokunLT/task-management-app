// import React from 'react';
import { useReducer, useState } from "react";
import Task from "./Task";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import "../assign-task-component/AssignTask.css"

export const ACTIONS = {
    ADD_TASK: "addTask",
    TOGGLE_TASK: "toggleTask",
    DELETE_TASK: "deleteTask"
}

function reducer(allTask, action) {
    switch (action.type) {
        case ACTIONS.ADD_TASK:
            /* // I tried adding validate input but not working as expected.
               // It validates but cause blank page after the finishing the validation.
                if(action.payload.name === "" && action.payload.dueDate === "") {
                    alert("Task input field cannot be empty")
                    break
                } else if(action.payload.dueDate===""){ 
                    alert("Enter Due Date")
                    break
                } 
            */

            return [...allTask, newTask(action.payload.name, action.payload.dueDate)]

            
        case ACTIONS.TOGGLE_TASK:
            return allTask.map(task => {
                if(task.id === action.payload.id) {
                    return { ...task, complete: !task.complete }
                }
                return task
            })
        case ACTIONS.DELETE_TASK:
            return allTask.filter(task=> task.id !== action.payload.id)
        default: 
            return allTask
        }
    }   
    
const newTask =((name,  dueDate) => {
    return {
        id: new Date().getTime().toString(),
        name: name,
        dueDate:dueDate,
        complete: false
    }
})


const TaskManager = () => {
    const [ allTask, dispatch ] = useReducer(reducer, []);
    const [name, setName] = useState("");
    const [dueDate, setDueDate] = useState("");
    
    const handleSubmit = ((e) => {
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_TASK, payload: {name:name, dueDate:dueDate} })
        setName("")
        setDueDate("")
        
    })
    
    return (
        <main className="container">
            <h1>Task Manager</h1>
            <form onSubmit={handleSubmit}>
                <fieldset className="field-wrap">
                    <legend className="blend-legend" htmlFor="task-name" >Task name</legend>
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e)=>setName(e.target.value)} 
                        required
                        placeholder="Enter Task Name"
                        id="task-name"
                    />
                </fieldset>
                <div className="date-submit">
                    <fieldset className="field-wrap ">
                        <legend className="">Due date</legend>
                        <input value={dueDate} onChange={(e)=>setDueDate(e.target.value)} type="date" required />
                    </fieldset>
                    <fieldset  className="field-wrap">
                        <legend className="blend-legend">Add task</legend>
                        <button type="submit" title="click to add new task">  Add task
                            <span>  <AddCircleOutlineIcon /> </span> 
                        </button>
                    </fieldset>
                </div>
            </form>

            {
                allTask.map(task => {
                    return <Task key={task.id} task={task} dispatch={dispatch} />
                })
            }
        </main>
    );
}

export default TaskManager;
