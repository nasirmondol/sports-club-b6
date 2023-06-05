import React from 'react';
import man from '../../../src/images/man.jpg';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart'>
            <img src={man} alt="" />
            <div className='bio-data'>
                <h4>Md. Mujaffor Ahmed</h4>
                <p><small>mujaffor@gmail.com</small></p>
            </div>
        </div>
    );
};

export default Cart;