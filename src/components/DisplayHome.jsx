import React from 'react'
import NavBar from './NavBar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'
import { useNavigate } from 'react-router-dom'


const DisplayHome = () => {

  
  return (
    <>
     <NavBar/>
    
     <div className="mb-4">
      <h1 className="my-5 font-bold text-2xl">Featured charts</h1>
      <div className="flex overflow-auto">
         {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}

      </div>
    </div>
    <div className="mb-4">
      <h1 className="my-5 font-bold text-2xl ">Today biggest`s hits</h1>
      <div className="flex overflow-auto">
     {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}

      </div>

    </div>

    </>
  )
}

export default DisplayHome
