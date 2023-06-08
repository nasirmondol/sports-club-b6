import React, { useEffect, useState } from 'react';
import man from '../../../src/images/man.jpg';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { Toaster, toast } from 'react-hot-toast';


const notify = () => toast('Activity completed successfully!');

const Cart = ({ cart }) => {
    const [times, setTimes] = useState([])



    useEffect(() => {
        fetch('time.json')
            .then(res => res.json())
            .then(data => setTimes(data))
    }, [])


    let total = 0;
    for (const product of cart) {
        total = total + parseInt(product.age);
    };


    // function showBreakTime(time) {
    //     var breakTimeText = document.getElementById("breakTimeText");
    //     breakTimeText.style.display = "block";
    //     breakTimeText.innerText = "Break Time: " + time + " seconds";
    //   }


    function showButtonText(time) {
        console.log(time)
        let breakeTimeText = document.getElementById("btn-id").innerText;
        console.log(breakeTimeText)
    }


    return (
        <div className='cart-container'>
            <div className='cart'>
                <img src={man} alt="" />
                <div className='bio-data'>
                    <h4 className='cart-name'>Md. Mahfuz Ahmed</h4>
                    <p className='cart-text'><small>
                        <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                        Dhaka, Bangladesh</small></p>
                </div>
            </div>
            <div className="text-container">
                <div className='str'>
                    <p className='p-text'><strong><strong>75</strong></strong><small>kg</small></p>
                    <p className='weight'>weight</p>
                </div>
                <div className='str'>
                    <p className='p-text'><strong>6.5</strong><small></small></p>
                    <p className='weight'><small>height</small></p>
                </div>
                <div className='str'>
                    <p className='p-text'><strong>25</strong><small>years</small></p>
                    <p className='weight'><small>Age</small></p>
                </div>



            </div>
            <br />
            <h3 className='add'>Add a breake</h3>
            <div className='ex-text'>
                <div className='ex-text'>
                    {/* <button onclick="showBreakTime(10)">10s</button>
                    <button onclick="showBreakTime(20)">20s</button>
                    <button onclick="showBreakTime(30)">30s</button>
                    <button onclick="showBreakTime(40)">40s</button>
                    <div className='exercise'>
                        <h5 className='ex' id="breakTimeText">Break Time: {showBreakTime}</h5>
                    </div> */}
                    {
                        times.map(time =>
                            <div className='btn-time'>
                                <button onClick={() => showButtonText(time.amount)} id="btn-id" className='btn-time'>{time.amount}</button>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='cart2'>
                <h3>Exercise Details</h3>
                <div className='exercise'>
                    <h5 className='ex'>Exercise Time: {total}</h5>
                </div>
                <div className='exercise'>
                    <h5 className='ex'>Break Time: {function showButtonText(time) {
                        console.log(time)
                        let breakTimeText = document.getElementById("btn-id").innerText;
                        console.log(breakTimeText)
                    }}</h5>
                </div>
            </div>
            <button className='toast-btn' onClick={notify}>Success</button>
            <Toaster></Toaster>
        </div>
    );
};

export default Cart;