import React from "react";
import logo from "/home/ubuntu/Desktop/Travel/public/Logo.png";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./slider";
import Footer from "./footer";
import Signup from "./signup";
import Signin from "./signin";
import About from "./about";
import Explore from "./explore";
import Is from "./Is";
import {Helmet,HelmetProvider} from "react-helmet-async";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';


function Slidebar() {
  return (
    
    <div className="d-flex flex-column flex-shrink-10  text-white bg-secondary vh-100 sidebar1" >
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      
    <img className="logo" src="../../public/Logo.png" alt="Logo" />
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li>
        <a href="/dashboard" className="nav-link text-white">
          Dashboard
        </a>
      </li>
      
      <li>
        <a href="/plans" className="nav-link text-white">
          Plans
        </a>
      </li>
      <li>
        <a href="/profile" className="nav-link text-white">
          Profile
        </a>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>User</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        
        <li><a className="dropdown-item" href="/signout">Sign out</a></li>
      </ul>
    </div>
  </div>
   
  );
}

export default Slidebar;
