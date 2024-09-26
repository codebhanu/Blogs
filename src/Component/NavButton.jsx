
import { Link } from 'react-router-dom'
const NavButton = (props) => {
 
  return (
    


<div>
 
  <Link  to={props.url}> <button  onClick={props.onClick}  className={` text-blue-500 text-3xl hover:bg-blue-600 hover:text-white p-4 ${props.isActive?'bg-green-600 text-white hover:bg-green-700' :''} `}>
  {props.title} </button>  </Link> 
  
  

</div>


  )
}

export default NavButton