import React from 'react'
import './css/Header.css'
import { Link } from "react-router-dom";
import logo from '../Components/images/navlogo.png'
const Header = () => {
    return (
        <div>

            <header data-aos="fade-out" >
        <ul className="ulhead">
             <img src={logo} alt="img" style={{width:'6%'}}/> 
    
            <div className="nav-items">
                <li> <Link to="/">  Home  </Link>   </li>
                <li> <Link to="/contact">  Contact & Headline  </Link></li>
                <li> <Link to="/notification">  Notification and Advisory </Link></li>
                <li> <Link to="/beds">  Hospital Dasboard  </Link></li>
            </div>
        </ul>
       </header>
       
        </div>
    )
}

export default Header
