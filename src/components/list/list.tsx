import { Link } from "react-router-dom";
import './styles.css'

function List() {
    return (
      <div className="App">
          <div className="list">
            <div className="card" style={{width: '18rem', border: 'thin solid #A9A9A9'}}>
                <img src="https://picsum.photos/1024/768" className="card-img-top" alt="anime-image" />
                <div className="card-body">
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <h5 className="card-title">Music name</h5>
                      <Link className="btn btn-primary detail" to="/detalhes">Detalhes</Link>
                    </div>
                </div>
            </div>

           
          </div>
      </div>
    )
  }
  
  export default List