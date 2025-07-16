import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate();  // Initialize the navigate function from the hook

  return (
    <>
    <div className="w-full flex justify-between items-center font-semibold">
       {/* Navigation arrows (back/forward in browser history) */}
        <div className="flex items-center gap-2">
            <img onClick={()=> navigate(-1)} className="w-8   bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left} alt=""/>
            <img onClick={()=> navigate(1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} alt=""/>

        </div>
        <div className="flex items-center gap-4">
            <p className="bg-white text-black text-[15px] px-4 py-1 rounded hidden md:block cursor-pointer">Explore premium</p>
            <p className=" text-white text-[15px] px-4 py-1 rounded hidden md:block cursor-pointer">Install App</p>
            <p className="rounded-full bg-purple-200 cursor-pointer px-2 ">D</p>

        </div>

    </div>
    <div className="flex items-center gap-2 mt-1">
        <p className="bg-white text-black rounded-2xl px-4 py-1 cursor-pointer">ALL</p>
        <p className="bg-white text-black rounded-2xl px-4 py-1 cursor-pointer">Music</p>
        <p className="bg-white text-black rounded-2xl px-4 py-1 cursor-pointer">Podcast</p>

    </div>
      
    </>
  )
}

export default NavBar; //Export navbar component to other part of application for use
