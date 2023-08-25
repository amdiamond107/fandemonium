import {NavLink} from "react-router-dom"

function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <a className="navbar-brand" to="/">
                🏟 Fandemonium 🎟
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>                    
                    <li class="nav-item">
                    <NavLink className="nav-link" to="/add_events">Add Events</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink className="nav-link" to="/search_events">Search</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;
