import React from 'react'
import SideBar from './components/SideBar'
import Player from './components/Player'
import Display from './components/Display'
import { useContext } from 'react'
import { PlayerContext } from './context/PlayerContext'
// --- Main App Component ---
const App = () => {
  // Sample song data to display using SongItem


  const {audioRef,track} = useContext(PlayerContext);




  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <SideBar/>
        
        {/* Main Content Section */}
        <Display/>

      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    
      
    </div>
  )
}

export default App
