import React, { useState } from 'react'
import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return (
        <div className='header-container wrap'>
            <div className='img-container'>
                <GiHamburgerMenu onClick={toggleDrawer}/>
                <img src="./../assets/Logo.png"></img>
            </div>
            {isDrawerOpen && (
                <div className="drawer">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Pages</li>
                        <li>Project</li>
                    </ul>
                </div>
            )}
            <div className='header-right-conatiner wrap'>
                <div className='adress wrap'>
                    <img src='./../assets/Time.png'></img>
                    <div className='time'>
                        <div>Mon - Sat 9.00 - 18.00</div>
                        <div>Sunday Closed</div>
                    </div>
                </div>
                <div className='adress wrap'>
                    <img src='./../assets/Mail.png'></img>
                    <div className='time'>
                        <div>Email</div>
                        <div>contact@logistics.com</div>
                    </div>
                </div>
                <div className='adress wrap'>
                    <img src='./../assets/Call.png'></img>
                    <div className='time'>
                        <div>Call Us </div>
                        <div>(00) 112 365 489</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header