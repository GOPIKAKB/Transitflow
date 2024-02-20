import React from 'react'

import './Service.css'

function Service() {
    return (
        <div className='service-container'>
            <div className='service-left-conatiner'>
                <div className='what-we-do'>
                    <div className='pattern'></div>
                    <div>What We Do</div>
                </div>
                <div className='safe-reliable'>Safe & Reliable Cargo Solutions </div>
            </div>
            <div className='service-content '>
                <div className='item-container '>
                    <img src='./../assets/Icon.png'></img>
                    <div >
                        <div>Sea Transport Services</div>
                        <div>Following the quality of our service thus having gained trust of our many clients.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service