import React, { useEffect, useState } from 'react';
import './Sports.css'
import Sport from '../Sport/Sport';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakeDb';

const Sports = () => {
    const [sports, setSports] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('sports.json')
            .then(res => res.json())
            .then(data => setSports(data))
    }, []);

    const handleAgeCalculate = (sport) => {
        const newCart = [...cart, sport]
        setCart(newCart)
    };

    const buttonOne = (id) => {
        addToDb(id);
    }

    return (
        <div className='sports'>
            <div className='sports-container'>
                {
                    sports.map(sport => <Sport
                        key={sport.id}
                        sport={sport}
                        handleAgeCalculate={handleAgeCalculate}
                    ></Sport>)
                }
            </div>
            <div className='car-container'>
                <Cart
                    cart={cart}
                    buttonOne={buttonOne}
                ></Cart>
            </div>
        </div>
    );
};

export default Sports;