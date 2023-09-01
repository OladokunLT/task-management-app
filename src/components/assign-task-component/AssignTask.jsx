import { useState } from "react";
import "./AssignTask.css"
// import {  AddCircleOutlineIcon, RadioButtonChecked, DeleteOutlineIcon } from "@mui/icons-material";
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


let nextId = 0;
const AssignTask = () => {
    const clearInputField = {
        id: nextId++,
        name: "",
        dueDate: "",
    }
    const [recentTask, setRecentTask] = useState(clearInputField);
    const [allTask, setAllTask] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setAllTask([...allTask, recentTask])
        console.log(allTask)
        setRecentTask(clearInputField)

    }

    return (
        <div className="container">
            <h1>Task Manager</h1>
            <form onSubmit={handleSubmit}>

                <fieldset className="field-wrap">
                    <legend className="blend-legend">Task name</legend>
                    <input type="text" id="name" value={recentTask.name} onChange={(e)=>setRecentTask({...recentTask, name: e.target.value})} placeholder="Enter task name" required/>
                </fieldset>
                <div className="date-submit">
                    <fieldset className="field-wrap ">
                        <legend className="">Due date</legend>
                        <input type="date" id="due-date" value={recentTask.dueDate} onChange={(e)=>setRecentTask({...recentTask, dueDate: e.target.value})} required/>
                    </fieldset>
                    <fieldset  className="field-wrap">
                        <legend className="blend-legend">Add task</legend>
                        <button type="submit">  Add task
                            <span>  <AddCircleOutlineIcon /> </span> 
                        </button>
                    </fieldset>
                </div>
            </form>

            <main>
                <div className="task-wrap">
                    <h2>All Tasks</h2>
                    <div className="task-wrapper">
                        {allTask.map((task) =>(   
                            <div key={task.id}>
                                <div className="each-task">
                                    <button>
                                        <span > <RadioButtonUncheckedIcon /> </span>
                                    </button>
                                    <article>
                                        <p><strong><small> Task name: </small></strong> {task.name}</p>
                                        <p> <strong><small> Due Date: </small></strong> {task.dueDate} </p>
                                    </article>
                                    <button className="del-btn"
                                        onClick={()=>{
                                            setAllTask(
                                                allTask.filter((e) => e.id !== task.id)
                                            )
                                        }}
                                    >
                                        <span><DeleteOutlineIcon /></span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AssignTask