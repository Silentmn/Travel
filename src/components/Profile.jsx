import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Profile(){
    const { user } = useContext(AuthContext);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
    
      const dateOnly = formatDate(user.Date_of_Birth);
    



    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className='container4'>
            <h2>Profile</h2>
            <center><img src="../../public/circle.png" alt="user" /></center>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Date of Birth:</strong> {dateOnly}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>Country:</strong> {user.country}</p>
            <p><strong>City:</strong> {user.city}</p>
        </div>
    );
};

export default Profile;
