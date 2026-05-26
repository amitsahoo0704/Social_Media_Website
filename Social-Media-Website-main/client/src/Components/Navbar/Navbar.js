import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="Navbar">
      <div className="nav-left">
        <Link to="/home" className="brand">Social<span>Hub</span></Link>
      </div>

      <div className="nav-center">
        <div className="search">
          <input placeholder="Search people, posts or videos" />
        </div>
      </div>

      <div className="nav-right">
        <nav>
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
