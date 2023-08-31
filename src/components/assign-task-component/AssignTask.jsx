import { useState } from "react";
import "./AssignTask.css"

let nextId = 0;
const AssignTask = () => {
    const clearInputField = {
        id: nextId++,
        name: "",
        dueDate: "",
        Instruction: ""
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
            <h1>Dashboard</h1>
            <form onSubmit={handleSubmit}>
                <div className="field-wrap">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={recentTask.name} onChange={(e)=>setRecentTask({...recentTask, name: e.target.value})}/>
                </div>
                <div className="field-wrap">
                    <label htmlFor="due-date">Due date</label>
                    <input type="text" id="due-date" value={recentTask.dueDate} onChange={(e)=>setRecentTask({...recentTask, dueDate: e.target.value})}/>
                </div>
                <div className="field-wrap">
                    <label htmlFor="Instruction">Instruction</label>
                    <input type="text" id="instruction" value={recentTask.Instruction} onChange={(e)=>setRecentTask({...recentTask, Instruction: e.target.value})}/>
                </div>
                <button type="submit"> Add task </button>
            </form>

            <main>
                <div className="task-wrap">
                    {allTask.map((task, index) =>(
                        <div key={index}> 
                            <h3>Task: {task.name}</h3>
                            <p><strong>Instruction: </strong>{task.Instruction}</p>
                            <p> <strong>Due Date</strong> {task.dueDate} </p>
                            <button 
                                onClick={()=>{
                                    setAllTask(
                                        allTask.filter((e) => e.id !== task.id)
                                    )
                                }}
                            >delete</button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default AssignTask