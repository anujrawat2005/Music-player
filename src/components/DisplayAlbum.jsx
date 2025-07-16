import React, { useContext } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';





// --- DisplayAlbum Component ---
/**
 * DisplayAlbum Component
 *
 * This component displays the details of a specific album, including its name, description,
 * and a list of songs belonging to that album. Users can click on individual songs to play them.
 * It retrieves the album ID from the URL parameters.
 */



const DisplayAlbum = () => {
  // useParams hook from react-router-dom to extract the 'id' parameter from the URL.
    // This 'id' is used to identify which album's data to display.

    const {id} = useParams();
    // Retrieve the specific album data using the extracted 'id' from the mock albumsData array.
    // Note: In a real application, you might fetch this data from an API based on the ID.
   

    const albumData = albumsData[id];
    // useContext hook to access the 'playwithId' function from the PlayerContext.
    // This function is responsible for initiating the playback of a song when clicked.
    const {playwithId} = useContext(PlayerContext);
    
  return (
    <>
     {/* Navigation Bar component, typically displayed at the top of the page */}
    <NavBar/>
    {/* Album Header Section */}
      {/* Displays album image, name, description, and some statistics */}
    <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
      <img className="w-48 rounded" src={albumData.image} alt=''/>
     <div className=" flex flex-col">
      <p>PlayList</p>
      <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
      <h4>{albumData.desc}</h4>
      <p className="mt-1">
        <img className="inline-block w-5" src={assets.spotify_logo} alt=''/>
        <b>Spotify</b>
        
        1,32,123 likes,
        <b>50 songs,</b>
        ,about 2 hrs 30 min
        
       


      </p>

     </div>
    </div>
    {/* Song List Header */}
      {/* Defines the columns for the song list: #, Title, Album, Date added, Duration */}
    <div className="grid grid-col-4 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
      <p className="mr-4"><b>#</b>title</p>
      <p>Album</p>
      <p className="hidden sm:block">Date added</p>
      <img className="m-auto w-4" src={assets.clock_icon} alt=''/>

    </div>
    <hr/>{
      songsData.map((item,index)=>(
        // Each song item is a clickable div.
          // onClick: Triggers playback using playwithId from PlayerContext.
          // key: Unique key for React list rendering.
          // grid-cols-3 sm:grid-cols-4: Responsive grid layout for song details.
          // gap-2 p-2 items-center: Spacing and alignment.
          // cursor-pointer text-[#a7a7a7] hover:bg-[#ffffff2b]: Styling for interactivity.
        <div onClick={()=>playwithId(item.id)} key={index} className="grid grid-cols-3 sm:grid-cols-4  gap-2 p-2 items-center
        cursor-pointer text-[#a7a7a7] hover:bg-[#ffffff2b]">
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
            <img className="inline w-10 mr-5" src={item.image } alt=" "/>
            {item.name}

          </p>
          <p className="text-[15px] ">{albumData.name}</p>
          <p className="text-[15px] sm:block hidden"> 5 days ago</p>
          <p className="text-[15px] text-center ">{item.duration}</p>

        </div>

      ))
    }
    </>
      
   
  )
}

export default DisplayAlbum
