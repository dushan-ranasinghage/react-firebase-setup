import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (<> <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#" style={{
          fontSize: '27px',
          paddingTop:'0px',
          paddingBottom:'0px'
    }}>ABC Pvt(Ltd)</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <Link to="/"><a className="nav-link" href="#">Employees <span className="sr-only">(current)</span></a></Link>
        </li>
        <li className="nav-item">
          <Link to="/customers"><a className="nav-link" href="#">Customers</a></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Admin</a>
        </li>
      </ul>
    </div>
  </nav></>)
}

export default NavBar
