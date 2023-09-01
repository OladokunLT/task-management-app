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
                <div className="field-wrap">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={recentTask.name} onChange={(e)=>setRecentTask({...recentTask, name: e.target.value})} placeholder="Enter task name"/>
                </div>
                <div className="field-wrap">
                    <label htmlFor="due-date">Due date</label>
                    <input type="date" id="due-date" value={recentTask.dueDate} onChange={(e)=>setRecentTask({...recentTask, dueDate: e.target.value})}/>
                </div>
                <button type="submit">  Add task
                    <span>  <AddCircleOutlineIcon /> </span> 
                </button>
            </form>

            <main>
                <div className="task-wrap">
                    <h3>All Tasks</h3>
                    <div className="task-wrapper">
                        {allTask.map((task) =>(   
                            <div key={task.id}>
                                <div className="each-task">
                                    <button>
                                        <span > <RadioButtonUncheckedIcon /> </span>
                                    </button>
                                    <article>
                                        <p>{task.name}</p>
                                        <p> <strong>Due Date</strong> {task.dueDate} </p>
                                    </article>
                                    <button className="del-btn"
                                        onClick={()=>{
                                            setAllTask(
                                                allTask.filter((e) => e.id !== task.id)
                                            )
                                        }}
                                    ><span><DeleteOutlineIcon /></span></button>
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