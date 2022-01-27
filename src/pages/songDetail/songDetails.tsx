import { Link } from "react-router-dom"
import InfoSong from "../../components/infoSong/infoSong"

function SongDetails() {
    return (
      <div className="App">
        <h1 style={{
          width: '90vw',
          margin: '5vh auto 2vh',
          fontSize: '32px'

        }}>Detalhes</h1>
        <InfoSong />
        
      </div>
    )
  }
  
  export default SongDetails