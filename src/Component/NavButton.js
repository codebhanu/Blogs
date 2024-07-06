
import { Link } from 'react-router-dom'
const NavButton = (props) => {
 
  return (
    


<div>
 <button  onClick={props.onClick}  className={` text-blue-500 text-3xl hover:bg-blue-600 hover:text-white p-4 ${props.isActive?'bg-green-600 text-white hover:bg-green-700' :''} `}
 ><Link to={props.url}>{props.title}</Link></button>

</div>


  )
}

export default NavButton