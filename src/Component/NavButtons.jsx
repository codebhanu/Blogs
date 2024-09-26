import React from 'react'
import NavButton from './NavButton'
import { Outlet } from 'react-router-dom'
import StickyDiv from './StickyDiv'
import { useState } from 'react'

 const NavButtons = () => {
    const[activeButton ,setActiveButton]=useState('')

    const buttons=[{title:'Blogs',url:'/Blogs/page/1'},
        {title:'About',url:'/about'},
        {title:'Project',url:'/project'},
    ]
    function handleClick(index) {
        setActiveButton(index)}
  return (
    <div>
        <div className="bg-white flex flex-row justify-between ">
        <div>
          <NavButton url={"/"} title={"Home"} />
        </div>
        <div className="flex flex-row">
          {buttons.map((button,index)=><NavButton key={index} title={button.title} url={button.url} isActive={index===activeButton} onClick={()=>handleClick(index)}/>)}
        </div>
      </div>
      <StickyDiv />
      <Outlet/>

    </div>
  )
}

export default NavButtons