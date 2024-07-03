import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card';

function Explore() {
    let [data, setData] = useState([]);
    

    useEffect(() => {
        axios.get('http://localhost:3000/data')
            .then(response => {
                console.log("Data fetched:", response.data); // Debugging log
                if (Array.isArray(response.data)) { // Ensure the response data is an array
                    setData(response.data);
                    console.log("Data state set successfully:", response.data);
                } else {
                    console.error("Unexpected data format:", response.data);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    console.log("Current data state:", data); // Log current data state

    

    return (
        <div>
            
        {data.length === 0 ? (
            <p>No data available</p>
        ) : (
            <ul>
                {data.map((item, index) => (
                   <div className='cardlist'>
                     <li  key={index}><Card name={item.place_name} day={item.days} image={item.picture} price={item.price} text={item.introduction}/></li>
                   </div>
                ))}
            </ul>
        )}
    </div>

    );
};

export default Explore;
