import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanCard from './PlanCard';


function Plans() {
    const [data, setData] = useState([]);
    const [travelSpotType, setTravelSpotType] = useState('');
    const [minBudget, setMinBudget] = useState('');
    const [maxBudget, setMaxBudget] = useState('');
    const [days, setDays] = useState('');

    const fetchData = () => {
        const params = {
            travel_spot_type: travelSpotType,
            min_budget: minBudget,
            max_budget: maxBudget,
            days: days
        };

        axios.get('http://localhost:3000/plans', { params })
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
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log("Current data state:", data); // Log current data state

    return (
        <div>
            <div className="filter-container">
                <label>
                    Travel Spot Type:
                    <select value={travelSpotType} onChange={e => setTravelSpotType(e.target.value)}>
                        <option value="">All</option>
                        <option value="SEA">Sea</option>
                        <option value="MOUNTAIN">Mountain</option>
                        <option value="CITY">City</option>
                        <option value="JUNGLE">Jungle</option>
                        <option value="HISTORICAL">Historical</option>
                    </select>
                    </label>
                <label>
                    Min Budget:
                    <input type="number" value={minBudget} onChange={e => setMinBudget(e.target.value)} />
                </label>
                <label>
                    Max Budget:
                    <input type="number" value={maxBudget} onChange={e => setMaxBudget(e.target.value)} />
                </label>
                <label>
                    Days:
                    <select value={days} onChange={e => setDays(e.target.value)}>
                        <option value="">All</option>
                        <option value="3">3 Days</option>
                        <option value="5">5 Days</option>
                    </select>
                </label>
                <button onClick={fetchData}>Filter</button>
            </div>

            {data.length === 0 ? (
                <p className="no-data">No data available</p>
            ) : (
                <ul >
                    {data.map((item, index) => (
                        <div className="cardlist" key={index}>
                            <li>
                                <PlanCard id={item.t_id} name={item.place_name} day={item.days} image={item.picture} price={item.price} text={item.introduction} />
                            </li>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Plans;
