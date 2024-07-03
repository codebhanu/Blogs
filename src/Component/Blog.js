import React from 'react'
import blogPosts from '../Content/BlogsContent'
import { useParams } from 'react-router-dom'
import NavButton from './NavButton'

const Blog = (props) => {
  const {id}= useParams()
  const blogPost = blogPosts.find(post => post.id === Number(id));
  if (!blogPost) {
    return <div>Blog post not found</div>;
  }
 
  return (
    <>
    <div className='   h-screen overflow-auto bg-white ' >


    <NavButton />
     <div className='w-screen flex items-center justify-center overflow-auto '>

       <div className=' flex flex-col w-[600px] mt-20 '>

        <h1 className='text-center font-bold  text-black text-3xl'>{blogPost.title}</h1>
        <p className='text-gray-400 text-sm font-semibold' >{blogPost.date}</p>
        <p className='text-center font-semibold text-black'>{blogPost.content}</p>

        </div>
      </div>



    </div>
      </>
  )
}

export default Blog