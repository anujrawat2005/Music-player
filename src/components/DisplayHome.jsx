import React from 'react'
import NavBar from './NavBar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'
import { useNavigate } from 'react-router-dom'


const DisplayHome = () => {

  // This component renders the home screen, displaying a navigation bar and lists of albums and songs.
  return (
    <>
     {/* Navigation bar at the top of the home page */}
     <NavBar/>
     {/* Section for displaying featured charts (albums) */}
    
     <div className="mb-4">
      <h1 className="my-5 font-bold text-2xl">Featured charts</h1>
       {/* Container for album items, with horizontal scrolling if content overflows */}
      <div className="flex overflow-auto">
         {/* Maps through songsData to render a SongItem for each song */}
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
