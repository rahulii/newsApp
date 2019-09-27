import React  from 'react';
import { Link,NavLink } from 'react-router-dom';
const Navbar = () =>{
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">News App</a>
                <ul className="right">
                    <li><Link to="/">News</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;