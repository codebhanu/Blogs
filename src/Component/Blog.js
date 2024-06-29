import React from 'react'
import { useParams } from 'react-router-dom'
const Blog = (props) => {
  const {id} =useParams()
  return (
    <div>This is blog no {id}
    
      </div>
  )
}

export default Blog