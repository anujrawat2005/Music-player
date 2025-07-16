import React from 'react'
import { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';
//import { useNavigate } from 'react-router-dom';
// Importing the PlayerContext to access global player state and functions.
// import { useNavigate } from 'react-router-dom'; // Commented out as it's not currently used. Would be used for navigation.







{/*
 * SongItem Component
 *
 * This component displays a single song item, typically as part of a list or grid.
 * When clicked, it triggers the playback of the associated song using the PlayerContext.
 *
 * @param {SongItemProps} props - The properties passed to the component.
 * @returns {JSX.Element} A div element representing a clickable song item.
 */}



const SongItem = ({image,name,desc,id}) => {

  const {playwithId} = useContext(PlayerContext);



  return (

    // The main container for the song item.
    // It has a click handler that calls `playwithId` with the song's unique ID.
    // Tailwind CSS classes are used for styling:
    // - min-w-[180px]: Sets a minimum width for the item.
    // - p-2 px-3: Adds padding inside the item.
    // - rounded: Applies rounded corners.
    // - cursor-pointer: Changes the mouse cursor to a pointer on hover, indicating it's clickable.
    // - hover:bg-[#ffffff26]: Applies a semi-transparent white background on hover for visual feedback.
    <div onClick={()=>playwithId(id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
        <img className="rounded" src={image} alt=''/>
        <p className=" font-bold mt-1 mb-1">{name}</p>
        <p className="font-bold mt-1 mb-1">{desc}</p>

      
    </div>
  )
}

export default SongItem;
