import React, { useEffect, useState } from 'react';
import './Sports.css'

const Sports = () => {
    const [sports, setSports] = useState([]);

    useEffect(() => {
        fetch('sports.json')
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])
    return (
        <div>
            <h1>Total: {sports.length}</h1>
            
        </div>
    );
};

export default Sports;