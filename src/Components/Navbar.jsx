/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav navbar-links">
      <Link to= '/' className="nav-link active link1"><img src="Images/Calendly-logo.png" width="90px"/></Link>
      <Link to= '/individual' className="nav-link links">Individual</Link>
      <Link to= '/team' className="nav-link links">Team</Link>
      <Link to= '/enterprise' className="nav-link links">Enterprise</Link>
    </nav>
  )
}

export default Navbar


