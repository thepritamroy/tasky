// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { TodoProvider } from './contexts/TodoContext.jsx'

createRoot(document.getElementById('root')).render(

    
    <BrowserRouter>
        <TodoProvider>
            <Routes>
                <Route element={<App />} path='/*'></Route>
            </Routes>
        </TodoProvider>           
    </BrowserRouter>
    
        
            

 
     
 

  
)
