import './NavBar.css'
import Burger from './Burger.jsx'
import { Link } from 'react-router-dom';
import { useState } from 'react'


const NavBar = () => {
    const logobeg = "</"
    const logomid = "Ziyad"
    const logoend = ">"
    const logo = logobeg + logomid + logoend
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

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

            <div>
                <Burger isOpen = {open} toggleMenu = {toggle} />
            </div>

            <ul className={`nav-links ${open ? 'open' : ''} `}>
                <li className="nav-link"><Link to="/">Home</Link></li>
                <li className="nav-link"><Link to="/about">About</Link></li>
                <li className="nav-link"><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default NavBar