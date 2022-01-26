import { Link } from "react-router-dom";
import './styles.css'

function Header() {
    return (
      <div className="App">
        <div className="header">
          <Link className="title" to="/">Anime SongBook</Link>
        </div>
      </div>
    )
  }
  
  export default Header