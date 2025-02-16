import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"
import '../css/Completed.css'

function Completed(){

    const {completedTasks} = useContext(TodoContext);

    return(
    <div className="completed-task-container">
    
        {completedTasks.length!==0? completedTasks.map((completedTask,index)=>
        <div key={index} className="completed-task">
            <h2 className="completed-task-title">{completedTask.task.newTask}</h2>
            <p className="completed-task-description">{completedTask.task.newDes}</p>
            <p className="completion-time">Completed at : {completedTask.time}</p>
        </div>) : <p className="no-task-completion">No task has completed yet!😔</p>}
    </div>)
}

export default Completed