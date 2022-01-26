import { Link } from "react-router-dom"
import List from "../../components/list/list"
import SearcForm from "../../components/searchForm/searchForm"
import './styles.css'

function AllSongs() {
    return (
      <div className="App">
        <SearcForm/>
        <br />
        <List/>

      </div>
    )
  }
  
  export default AllSongs
  