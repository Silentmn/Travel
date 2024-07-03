import React, { useContext , useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import axios from 'axios';
import PlanCard from './PlanCard';
import Purchase from './purchase';

function Dashboard(){
    const { user } = useContext(AuthContext);
    const [tour, setTour] = useState(null);
    const [error, setError] = useState('');
    
    useEffect(() => {
        
          axios.get(`http://localhost:3000/tours/${user.t_id}`)
            .then(response => {
              setTour(response.data); // Assuming response.data contains tour details
            })
            .catch(error => {
              console.error('Error fetching tour details:', error);
              setError('No purchase is available in your account');
            });
        
      }, [user.t_id]);


    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className='dashboard'>
            
            <img src="../../public/circle.png" alt="user" />
            <h1>Hello , {user.name}</h1>
            <hr />
            <h1>Your Purchase</h1>
            {tour ? (
        <Purchase id={tour.t_id} name={tour.place_name} day={tour.days} image={tour.picture} price={tour.price} text={tour.introduction} />
      ) : (
        <p>{error || 'Loading tour details...'}</p>
      )}
        </div>
    );
};

export default Dashboard;
