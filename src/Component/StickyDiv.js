import { useState,useEffect } from "react";

 function StickyDiv(){
    const[ScrollRatio,SetScrollRatio]=useState(0)
    useEffect(()=>{
        const handleScroll=()=>{
            const topWidth=window.scrollY
            const scrollHeight=document.documentElement.scrollHeight-window.innerHeight
            const ratio=topWidth/scrollHeight
            SetScrollRatio(ratio)

        }

        window.addEventListener("scroll",handleScroll)
        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[])
    return (
        <div className="sticky top-0 w-full h-1 bg-blue-300  z-10">
            <div className="h-full bg-blue-500 transition-all duration-100"
            style={{width:`${ScrollRatio*100}%`}}></div>

        </div>
    )
}

export default StickyDiv