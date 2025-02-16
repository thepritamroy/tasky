import { useContext, useEffect, useState } from "react"
import '../css/Home.css'
import { TodoContext } from "../contexts/TodoContext";


function Home(){
    const [tasks,setTasks] = useState( JSON.parse(localStorage.getItem('tasks')) || []);
    const [newTask,setnewTask] = useState("");
    const [newDes,setNewDes] = useState("");
    const {setCompletedTasks} = useContext(TodoContext);
    const [time,setTime] = useState(new Date());


    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(tasks))
    },[tasks])

    

    function handleAddTask(){
      if(newTask){
        if(tasks.length===0){
            setTasks((t)=>[...t, {date: time, dayOfTasks:[{newTask:newTask,newDes:newDes}]}])
        }else{

        let isAdded = false;    
    
        const updatedTasks = tasks.map((task)=>{
            const taskDate = new Date(time);
            const extaskDate = new Date(task.date);
            if(taskDate.getDate()===extaskDate.getDate()){
                task.dayOfTasks.push({ newTask: newTask, newDes: newDes });
                isAdded = true;
                console.log('matched');
            }

            return task;
        });


        if(isAdded){
            // setTasks((t) => [...t]);
            setTasks(()=>updatedTasks);
        }else{
            setTasks((t)=>[...t, {date: time, dayOfTasks:[{newTask:newTask,newDes:newDes}]}])
            console.log('checked')
        }

        }

        setNewDes('');
        setnewTask('');
        setTime('');

      }
        
    }

    function handleRemoveTask(ind,index){
        const task = tasks[ind];
        
       task.dayOfTasks = task.dayOfTasks.filter((_,i)=>i!==index);
       setTasks((t) => [...t]);
       if(task.dayOfTasks.length===0){
        setTasks(tasks.filter((_,i)=>i!==ind))
    }
        
        
    }

    // function handleMoveUpTask(index){
        
    //     if(index>0){
    //     const updatedTasks=[...tasks]
    //     const tmp=updatedTasks[index];                
    //     updatedTasks[index]=updatedTasks[index-1];
    //     updatedTasks[index-1]=tmp;
        
    //     setTasks(updatedTasks)
        
    //     }
        
    // }

    // function handleMoveDownTask(index){
        
    //     if(index<tasks.length-1){
    //     const updatedTasks=[...tasks]
    //     const tmp=updatedTasks[index];                
    //     updatedTasks[index]=updatedTasks[index+1];
    //     updatedTasks[index+1]=tmp;
        
    //     setTasks(updatedTasks)
        
    //     }
    // }

    function handleComplete(ind,index){
        const completionTime = new Date();
        const timeString = timeFormatting(completionTime);
        const task= tasks[ind];
        const newTask ={time:timeString,task:task.dayOfTasks[index]}
        setCompletedTasks((c)=>[...c,newTask]);

        handleRemoveTask(ind,index); 
        
        window.alert('Congrats🤩 U have completed the task')
    }

    function timeFormatting(time){
        let hours = new Date(time).getHours()
        const meridian = hours>12? "PM" : "AM"
        hours  = hours % 12 || 12
        let minutes = new Date(time).getMinutes()
        let date = new Date(time).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });       

       return `${date} at ${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')} ${meridian}`
    }



    return(
    <div className="main-container">

       <div className="todo-list-container">
            <h1 className="todo-list-title">To-Do-List</h1>

            <div className="inputs">
                <input className="todo-input" value={newTask} type="text" 
                placeholder="Enter task..." onChange={(e)=>setnewTask(e.target.value)}/>

                <input className="todo-input" value={newDes} type="text" 
                placeholder="Enter Description..." onChange={(e)=>setNewDes(e.target.value)}/>

                <input className="todo-input" value={time} type="date" 
                placeholder="select date" onChange={(e)=>setTime(e.target.value)}/>

                <button className="todo-add" onClick={()=>handleAddTask()}>Add</button>

            </div>

       </div>

       <div className="render-list-container">
            {tasks.map((task ,ind)=>{
                return (
                <div  className="render-list" key={ind}>
                    <div className="date">
                        <h2>{new Date(task.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</h2>
                    </div>
            
                    <div className="task-container">
                        {
                            task.dayOfTasks.map((dayOfTask,index)=>{
                                return <div key={index} className="task">
                                <div className="text">
                                    <p className="task-text">{dayOfTask.newTask}</p>
                                    <p className="description-text">{dayOfTask.newDes}</p>
                                </div>
                                
                                <button title="Delete" className="delete-btn" onClick={()=>handleRemoveTask(ind,index)}><i className="fa-solid fa-trash"></i></button>
            
                                <button title="Complete" className="complete-btn" onClick={()=>handleComplete(ind,index)}><i className="fa-solid fa-check"></i></button>
                            </div>
                            }
                            )
                        }
                    </div>

                </div>)
            })}
       </div>
                     
    </div>)


}

export default Home