import { Link } from "react-router-dom";
import { FaSpotify } from "react-icons/fa";
import './styles.css'

function InfoSong() {
    return (
      <div className="App">
          <div className="back">
            <Link className="btn btn-primary backBtn" to="/">Voltar</Link>
          </div>

          <br />
        
          <hr style={{
              width: '94vw',
              margin: '0 auto'
            }} 
          />

          <div className="content">
            <div className="photo">
              <img src="https://picsum.photos/1024/768" className="card-img-top" alt="anime-image" />
            </div>

            <div className="info">
              <div className="titles">
                <h2>Titulo</h2>
                <p className="fw-light">artista</p>
              </div>

              <div>
                <audio controls>
                  <source className="player" src="https://www.computerhope.com/jargon/m/example.mp3" />
                </audio>
              </div>
              <br />

              <div className="extraInfo">
                <p> <span>Álbum:</span> album</p>
                <p> <span>Ano:</span> ano</p>
              </div>
              
              <button type="button" className="btn btn-primary spotify"> <FaSpotify /> Escute no Spotify</button>
            </div>
          </div>
      </div>
    )
  }
  
  export default InfoSong