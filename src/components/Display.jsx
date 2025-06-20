import React, { useEffect, useRef } from 'react'
import DisplayHome from './DisplayHome'
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/assets';


const Display = () => {


  const DisplayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const AlbumId = isAlbum ? location.pathname.slice(-1): "";
  const bgColor = albumsData[Number(AlbumId)].bgColor;


  useEffect(()=>{
    if(isAlbum){
      DisplayRef.current.style.background=  `linear-gradient(${bgColor},#121212)`
    }
    else{
      DisplayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
    }
  })
 






 
  
  return (
    <div ref={DisplayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
        <Routes>
            <Route path='/' element ={<DisplayHome/>} />
            <Route path='/album/:id' element = {<DisplayAlbum/>} />
        </Routes>
      
    </div>
  )
}

export default Display;
