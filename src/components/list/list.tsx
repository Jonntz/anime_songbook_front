import { Link } from "react-router-dom";
import './styles.css'

function List() {
    return (
      <div className="App">
          <div className="list">
            <div className="card" style={{'width': '18rem'}}>
                <img src="http://lorempixel.com.br/500/400/anime" className="card-img-top" alt="anime-image" />
                <div className="card-body">
                    <h5 className="card-title">Music name</h5>
                    <Link className="btn btn-primary detail" to="/detalhes">Detalhes</Link>
                </div>
            </div>

           
          </div>
      </div>
    )
  }
  
  export default List