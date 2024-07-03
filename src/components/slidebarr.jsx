import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slidebar from "./slidebar";
import Signup from "./signup";
import Signin from "./signin";
import About from "./about";
import Explore from "./explore";
import Is from "./Is";
import Plans from "./plans";
import Profile from "./Profile";
import Dashboard from "./dashboard";
import DetailsPage from "./detailspage";

function Slidebarr() {
    return (
        <div className="app">
            <Slidebar />
            <div className="main-content">
                <Routes>
                    <Route exact path="/" element={<Is />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/plans" element={<Plans />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/details/:id" element={<DetailsPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default Slidebarr;