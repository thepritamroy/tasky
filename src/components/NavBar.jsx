import { Link, useLocation } from "react-router-dom";
import '../css/NavBar.css'

function NavBar(){

      const location = useLocation()

return (<nav>
      <Link className="home" to='/' 
            style={{background: location.pathname === "/" ? "#777676" : "#333333",
            borderRadius: location.pathname==="/" ? "5px" : "0px"}}>
            Home
      </Link>
      <Link className="completed" to='/completed' 
            style={{background: location.pathname === "/completed" ? "#777676" : "#333333" ,
            borderRadius: location.pathname==="/completed" ? "5px" : "0px"}}>
            Completed
      </Link>
      
</nav>)
}

export default NavBar