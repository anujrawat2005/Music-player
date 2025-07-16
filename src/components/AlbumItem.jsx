import React from 'react'
import { useNavigate } from 'react-router-dom'




/**
 * AlbumItem Component
 *
 * This component displays a single album item, typically as part of a list or grid of albums.
 * When clicked, it navigates to the detailed view of that album using its unique ID.
 *
 * @param {AlbumItemProps} props - The properties passed to the component.
 * @returns {JSX.Element} A div element representing a clickable album item.
 */






const AlbumItem = ({image,name,desc,id}) => {

  const navigate = useNavigate();



  return (
    // The main container for the album item.
    // It has a click handler that navigates to the '/album/:id' route.
    // Tailwind CSS classes are used for styling:
    // - min-w-[180px]: Sets a minimum width for the item.
    // - p-2 px-3: Adds padding inside the item.
    // - rounded: Applies rounded corners.
    // - cursor-pointer: Changes the mouse cursor to a pointer on hover, indicating it's clickable.
    // - hover:bg-[#ffffff26]: Applies a semi-transparent white background on hover for visual feedback.
    <div onClick={()=>navigate(`/album/${id}`)} className="min-w-[180px] p-2 px-3  rounded cursor-pointer hover:bg-[#ffffff26]">
        <img className="rounded" src={image} alt=''/>
        <p className="font-bold mt-1 mb-1">{name}</p>
        <p className="text-slate-200 text-sm">{desc}</p>
            
      
    </div>
  )
}

export default AlbumItem
