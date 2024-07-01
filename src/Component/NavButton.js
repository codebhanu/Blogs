import {React} from 'react'
import { Link } from 'react-router-dom'

const NavButton = () => {
  return (


<div>
      <ul className='flex flex-row items-center justify-between m-5 sticky top-0'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Blogs/page/1'>Blogs</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/something'>Something</Link>
        </li>
        <li>
          <Link to='/something'>Something</Link>
        </li>
      </ul>
  </div>


  )
}

export default NavButton