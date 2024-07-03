import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DetailsPage() {
  const { id } = useParams();
  const [tourDetails, setTourDetails] = useState(null);

  useEffect(() => {
    // Fetch tour details based on ID
    axios.get(`http://localhost:3000/tours/${id}`)
      .then(response => {
        setTourDetails(response.data); // Assuming response.data contains tour details
      })
      .catch(error => {
        console.error('Error fetching tour details:', error);
      });
  }, [id]);

  if (!tourDetails) {
    return <p>Loading...</p>; // Placeholder for loading state
  }

  return (
    <div className='container5'>
      <h2>{tourDetails.place_name}</h2>
      <p>🇮🇳  {tourDetails.introduction}</p>
      <p>PRICE : ₹ {tourDetails.price} per head</p>
      <p>{tourDetails.days} days tour</p>
      <p><pre>{tourDetails.tour_plan}</pre></p>
      <p>HOTEL : {tourDetails.hotel}</p>
      <p>LOCAL GUIDE : {tourDetails.local_guide_name_and_number}</p>
    </div>
  );
}

export default DetailsPage;
