import { Link } from "react-router-dom"
import './styles.css'

function SearcForm() {
    return (
      <div className="App">
        <div className="formulario">
            <form>
                <select name="select" className="select">
                    <option value="artist">Artista</option>
                    <option value="title" selected>Nome</option>
                    <option value="anime">Anime</option>
                    <option value="year">Ano</option>
                </select>
                <input type="text" placeholder="Pesquise por uma música" />
            </form>
        </div>
      </div>
    )
  }
  
  export default SearcForm;