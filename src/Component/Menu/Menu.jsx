import React from 'react'

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import './Menu.css'

function Menu() {
    const menuItem = ["Home", "About", "Pages", "Project", "Contact"]
    return (
        <div className='menu-container'>
            <div className='menu-left-container'>
                {
                    menuItem.map(item =>
                        <div>{item}</div>
                    )
                }

            </div>
            <div className='menu-right-container'>
                <div className='social-icon-container'>
                    <FaInstagram />
                    <FaFacebook />
                    <FaLinkedin />
                    <FaTwitter />
                </div>
                <div className='reuest-button'>
                    <button>Request Quote</button>
                </div>
            </div>
        </div>
    )
}

export default Menu