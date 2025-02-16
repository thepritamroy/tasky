
import { createContext, useEffect, useState} from "react";

export const TodoContext = createContext();

export function TodoProvider({children}){

    
    const [completedTasks,setCompletedTasks] = useState(JSON.parse(localStorage.getItem('completed-tasks')) || []);

    useEffect(()=>{
        localStorage.setItem('completed-tasks',JSON.stringify(completedTasks));
    },[completedTasks])

    



    const value = {
        completedTasks, setCompletedTasks,    
    }
    
   return  <TodoContext.Provider value={value}>
        {children}
    </TodoContext.Provider>

}

