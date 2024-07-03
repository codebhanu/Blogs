import {React,useState} from 'react'
import { Link } from 'react-router-dom'




const NavButton = (props) => {
  const[buttonName ,setActive]=useState('')

  function handleClick(e){
    setActive(e.target.value)
    

    console.log(buttonName)
  }
  return (
    


<div>
 <button  className=' text-blue-600 font-semibold text-3xl hover:bg-blue-600 hover:text-white p-5 '><Link to={props.url}>{props.title}</Link></button>

</div>


  )
}

export default NavButton