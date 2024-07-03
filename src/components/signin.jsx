import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from "/home/ubuntu/Desktop/Travel/public/Logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AuthContext } from "./AuthContext";

function Signin() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/signin', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            console.log('Response:', response); // Log the entire response for debugging
    
            if (response.data.success) {
                setAuth(true, response.data.user); // Update authentication state with user data
                navigate('/dashboard');
            } else {
                setError(response.data.message); // Handle error messages from backend
            }
        } catch (error) {
            console.error('Error occurred:', error);
            setError('An error occurred. Please try again.');
        }
    };
    

    return (
        <div className="container3">
            <HelmetProvider>
                <Helmet>
                    <title>Sign In</title>
                </Helmet>
            </HelmetProvider>
            <form className="form-container sign-in-container" onSubmit={handleSubmit}>
                <img className="logo" src={logo} alt="Logo" />
                <h1>Sign in</h1>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <a className="SIL" href="#">Forgot your password?</a>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button className="SI" type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default Signin;