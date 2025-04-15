import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Completed from './pages/Completed'
import NavBar from './components/NavBar'

function App() {
                              

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="completed" element={<Completed/>}></Route>
      </Routes>
    </>
  )
  
}

export default App
