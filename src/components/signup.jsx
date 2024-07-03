import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        birthDate: '',
        gender: 'male',
        address: '',
        country: '',
        city: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/signup', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert(response.data.message);
            if (response.data.success) {
                navigate('/signin');
            }
        } catch (error) {
            console.error(error);
            alert('Error submitting the form');
        }
    };

    return (
        <section className="container2">
            <header><strong>Sign Up</strong></header>
            <form onSubmit={handleSubmit} className="form">
                <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" name="fullName" placeholder="Enter full name" required onChange={handleChange} />
                </div>

                <div className="input-box">
                    <label>Email Address</label>
                    <input type="text" name="email" placeholder="Enter email address" required onChange={handleChange} />
                </div>

                <div className="column">
                    <div className="input-box">
                        <label>Phone Number</label>
                        <input type="number" name="phone" placeholder="Enter phone number" required onChange={handleChange} />
                    </div>
                    <div className="input-box">
                        <label>Birth Date</label>
                        <input type="date" name="birthDate" placeholder="Enter birth date" required onChange={handleChange} />
                    </div>
                </div>
                <div className="gender-box">
                    <h3>Gender</h3>
                    <div className="gender-option">
                        <div className="gender">
                            <input type="radio" id="check-male" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
                            <label htmlFor="check-male">Male</label>
                        </div>
                        <div className="gender">
                            <input type="radio" id="check-female" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
                            <label htmlFor="check-female">Female</label>
                        </div>
                        <div className="gender">
                            <input type="radio" id="check-other" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleChange} />
                            <label htmlFor="check-other">Prefer not to say</label>
                        </div>
                    </div>
                </div>
                <div className="input-box address">
                    <label>Address</label>
                    <input type="text" name="address" placeholder="Enter street address" required onChange={handleChange} />

                    <div className="column">
                        <div className="select-box">
                            <select name="country" onChange={handleChange}>
                                <option hidden>Country</option>
                                <option value="America">America</option>
                                <option value="Japan">Japan</option>
                                <option value="India">India</option>
                                <option value="Nepal">Nepal</option>
                            </select>
                        </div>
                        <input type="text" name="city" placeholder="Enter your city" required onChange={handleChange} />
                    </div>
                    <div className="column">
                        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" required onChange={handleChange} />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Signup;
