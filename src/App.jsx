import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Completed from './pages/Completed'
import NavBar from './components/NavBar'
import { TodoProvider } from './contexts/TodoContext'

function App() {
                              

  return (
    <>
    <NavBar/>
    <TodoProvider>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="completed" element={<Completed/>}></Route>
      </Routes>
    </TodoProvider>
    
    </>
  )
  
}

export default App
