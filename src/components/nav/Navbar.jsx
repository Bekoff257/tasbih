import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from "../../assests/icons/logo.png"
import classess from "./Navbar.module.scss" 
import { FiSettings } from "react-icons/fi"
import { MdOutlineLiveTv } from "react-icons/md"

function Navbar() {
  return (
    <div>
        <>
        <div className={classess.container}>
        <nav className={classess.navbar}>    
          <div className={classess.nav_logo}>
              <Link to="/">
                <div className={classess.logo_div}>
                  <Link to="/live"><MdOutlineLiveTv /></Link>
                  <div className={classess.logo_text}>
                    <h2>Tasbeeh.uz</h2>
                    <img src={logo} alt="Logo" />
                  </div>
                  <Link className={classess.settings_sec} to="/settings"><FiSettings /></Link>
                </div>
              </Link>
          </div>
          </nav>     
        </div>
        </>
    </div>
  )
}

export default Navbar