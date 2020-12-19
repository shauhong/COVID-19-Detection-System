import { Link } from 'react-router-dom';
function NavBar(){
    return(
        <nav>
            <div className="logo">
                <Link to="/">COVID-19</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Scan</Link></li>
                <li><Link to="/patients">Patient</Link></li>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;