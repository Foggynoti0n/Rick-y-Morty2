import SearchBar from "./SearchBar"
import './Nav.css'
import {Link} from 'react-router-dom'

export default function Nav(props){
  const {onSearch}=props;
    return(
        <>
<div id="header">
<nav>
<div id="buttons">
<Link to='/About'> <button className="btn">About</button> </Link>
<Link to='/favorites'> <button className="btn">Favorites</button> </Link>
<Link to='/home'><button className="btn">Home</button></Link>
</div>
<SearchBar onSearch={onSearch} />
</nav>
</div>
        </>
    )
}