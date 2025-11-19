import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    const logobeg = "</"
    const logomid = "Ziyad"
    const logoend = ">"
    const logo = logobeg + logomid + logoend
    return (
        <div className="nav-bar">
            <div className="logo">
                <div className="logobeg">
                    {logobeg}
                </div>
                <div className="logomid">
                    {logomid}
                </div>
                <div className="logoend">
                    {logoend}
                </div>
            </div>

            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default NavBar