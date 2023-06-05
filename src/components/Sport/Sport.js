import React from 'react';
import './Sport.css'

const Sport = ({ sport }) => {
    const { name, time, img, description, age } = sport;
    return (
        <div className='sport'>
            <img height={220} src={img} alt="" />
            <h3 className='name'>{name}</h3>
            <p className='text'>For Age: {age}</p>
            <p className='text'>Time Required: {time}m</p>
            <p><small className='description'>{description}</small></p>
            <button className='btn'>Add to cart</button>
        </div>
    );
};

export default Sport;