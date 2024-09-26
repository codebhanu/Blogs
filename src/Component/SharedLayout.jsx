import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
const SharedLayout=()=>{
    return <>
    <h1>This is the shared layout</h1>
    <Link to='/Blogs/2'>Blog1</Link>
      <h1>Blog2</h1>
      <Link to='/Blogs/3'>Blog1</Link>

      <h1>Blog3</h1>
      <Link to='/Blogs/4'>Blog1</Link>

      <h1>Blog4</h1>
      <Link to='/Blogs/5'>Blog1</Link>

      <h1>Blog5</h1>
    <Outlet/>
    </>
}
export default SharedLayout