import {NavLink} from "react-router-dom"

function NavBar(){
    return(
        <div className="nav">
        <nav>
            <NavLink to="/">    Home   |    </NavLink>
            <NavLink to="/add_events">  Add Events |    </NavLink>
            <NavLink to="/search_events">   Search  Events</NavLink>
        </nav>
        </div>
    )
}

export default NavBar;