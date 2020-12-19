import { Link } from 'react-router-dom';
function NavBar(){
    return(
        <nav>
            <div className="logo">
                <Link to="/">COVID-19</Link>
            </div>
            <ul className="nav-links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/scan"><li>Scan</li></Link>
                <Link to="/"><li>Patient</li></Link>
                <Link to="/"><li>Dashboard</li></Link>
                <Link to="/login"><li>Login</li></Link>
            </ul>
        </nav>
    )
}

export default NavBar;