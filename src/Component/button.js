import React from 'react'
import readMoreSVG from '/Users/bhanudahal/blog/blogben/src/icons/readMoreSVG.svg'

 const Button = (props) => {
  return (
    <button className='relative bg-yellow-400 text-white hover:text-orange-400 hover:bg-white font-medium p-5 w-48 h-12 flex items-center justify-between group rounded-[5px] hover:border-yellow-400 border-2 border-solid'>
      <span className='text-2xl'>
        {props.title}
      </span>
      
      <div className='h-full inset-y-0 right-0 absolute bg-orange-400 flex items-center justify-center w-11 rounded-r-[5px] '>
        <img
          src={readMoreSVG}
          alt="Read More"
          className='w-10 h-12 transform transition-transform duration-300 group-hover:translate-x-1'
        />
      </div>
    </button>
  )
}
export default Button