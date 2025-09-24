import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top custom-navbar bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/static/Img/Logo.jpg" alt="Logo" style={{height:40, marginRight:8}} />
          <span className="brand-text">Mainecoon 4289 Pattaya</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink end className="nav-link" to="/"><i className="fas fa-home me-1"></i>หน้าแรก</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about"><i className="fas fa-heart me-1"></i>แมวของเรา</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/menu"><i className="fas fa-coffee me-1"></i>เมนู</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/gallery"><i className="fas fa-images me-1"></i>แกลเลอรี่</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact"><i className="fas fa-envelope me-1"></i>ติดต่อเรา</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
