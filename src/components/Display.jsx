import React, { useEffect, useRef } from 'react'
import DisplayHome from './DisplayHome'
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/assets';


// --- Display Component (New component from user query) ---
/**
 * Display Component
 *
 * This component acts as the main content area for the music player application.
 * It uses React Router to render different components (e.g., DisplayHome, DisplayAlbum)
 * based on the current URL path. It also dynamically changes its background color
 * based on the currently displayed album's theme.
 */



const Display = () => {
   // useRef hook to create a direct reference to the DOM element for background manipulation.


  const DisplayRef = useRef();
  // useLocation hook from React Router to get information about the current URL.
  const location = useLocation();
  // Check if the current path includes "album", indicating an album detail page.
  const isAlbum = location.pathname.includes("album");
  const AlbumId = isAlbum ? location.pathname.slice(-1): "";
  // Determine the background color based on the album data.
  // It attempts to get the bgColor property from the album corresponding to AlbumId.
  // A fallback might be needed here if albumsData[Number(AlbumId)] is undefined.
  const bgColor = albumsData[Number(AlbumId)].bgColor;

// useEffect hook to apply side effects (DOM manipulation) after render.
  // This effect runs whenever `isAlbum` or `bgColor` changes.
  useEffect(()=>{
    if(isAlbum){
      DisplayRef.current.style.background=  `linear-gradient(${bgColor},#121212)`
    }
    // If it's not an album page (e.g., home), set a linear gradient background.
      // NOTE: The original code used `bgColor` here as well, which might be unintended if a default
      // background is desired for non-album pages. For consistency with the original, it's kept,
      // but consider if a different default color is needed for non-album pages.
    else{
      DisplayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
    }
  })
 






 
  
  return (
    // Main container div for the display area.
    // ref={DisplayRef}: Attaches the ref to this element for direct DOM access.
    // className: Tailwind CSS classes for width, margin, padding, rounded corners, background, text color, and overflow.
    // lg:w-[75%] lg:ml-0: Responsive adjustments for large screens.
    <div ref={DisplayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
        <Routes>
            <Route path='/' element ={<DisplayHome/>} />
            <Route path='/album/:id' element = {<DisplayAlbum/>} />
        </Routes>
      
    </div>
  )
}

export default Display;
