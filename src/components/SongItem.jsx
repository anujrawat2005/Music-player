import React from 'react'
import { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';
//import { useNavigate } from 'react-router-dom';

const SongItem = ({image,name,desc,id}) => {

  const {playwithId} = useContext(PlayerContext);



  return (
    <div onClick={()=>playwithId(id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
        <img className="rounded" src={image} alt=''/>
        <p className=" font-bold mt-1 mb-1">{name}</p>
        <p className="font-bold mt-1 mb-1">{desc}</p>

      
    </div>
  )
}

export default SongItem;
