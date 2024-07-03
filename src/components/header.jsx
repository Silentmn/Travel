import React from "react";
import logo from "/home/ubuntu/Desktop/Travel/public/Logo.png";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample11"
            aria-controls="navbarsExample11"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse d-lg-flex collapse" id="navbarsExample11">
            <Link className="navbar-brand" to="/">
              <img className="logo" src={logo} alt="Logo" />
            </Link>
            <ul className="navbar-nav col-lg-6 justify-content-lg-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/explore">
                  Explore
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
            <div className="d-lg-flex col-lg-3 justify-content-lg-end">
              <Link className="info" to="/signin"><button className="btn">Sign In</button></Link>
              <Link className="info" to="/signup"><button className="btn">Sign Up</button></Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
