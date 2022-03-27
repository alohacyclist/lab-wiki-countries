import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <h1 className="navbar_link">
          <Link to={"/countries"} >WikiCountries</Link>
        </h1>
      </nav>
    </div>
  )
}
