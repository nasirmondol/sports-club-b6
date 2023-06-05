import React, { useEffect, useState } from 'react';
import './Sports.css'
import Sport from '../Sport/Sport';
import Cart from '../Cart/Cart';

const Sports = () => {
    const [sports, setSports] = useState([]);

    useEffect(() => {
        fetch('sports.json')
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])
    return (
        <div className='sports'>
            <div className='sports-container'>
                {
                    sports.map(sport => <Sport
                        key={sport.id}
                        sport={sport}
                    ></Sport>)
                }
            </div>
            <div className='car-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Sports;