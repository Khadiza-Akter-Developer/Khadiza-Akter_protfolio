import React from 'react';
import './Navbar.css';

const Navbar = () =>{
    return(
        <>
        <nav className='nav-wrapper'>
        <div className='nav-content'>
            {/* <img className='logo' src='' alt/> */}
            
            <ul>
                <li>
                    <a className='menu-list'>Home</a>
                </li>
                <li>
                    <a className='menu-list'>Skills</a>
                </li>
                <li>
                    <a className='menu-list'>WOrk Experience</a>
                </li>
                <li>
                    <a className='menu-list'>Contact Me</a>
                </li>
                <button className='contact-btn' onClick={() => {}}> Hire Me </button>
            </ul>
        </div>
        </nav>
        </>
      )
}
export default Navbar;