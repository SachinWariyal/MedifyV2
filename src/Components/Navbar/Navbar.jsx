// import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
const Navbar = () => {
    const [nav, setNav]= useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const openNav = () => {
        setNav(!nav);
    }

    const handleChatBtnClick = () =>{
        if(!isButtonDisabled){
            toast.info("Experiencing high traffic, Please wait a moment.",{
                position: toast.POSITION.TOP_CENTER,
                onOpen: () => setIsButtonDisabled(true),
                onClose: () => setIsButtonDisabled(false),
              });
        }
    }

  return (
    <div className='navbar-section'>
        <h1 className="navbar-title">
            <Link to='/'>
                Medify <span className='navbar-sign'>+</span>
            </Link>
        </h1>

        <ul className='navbar-items'>
            <li>
                <Link to='/' className='navbar-links'>Home</Link>
            </li>
            <li>
                <Link to='#doctors' className='navbar-links'>Find Doctors</Link>
            </li>
            <li>
                <Link to='#hospitals' className='navbar-links'>Hospitals</Link>
            </li>
            <li>
                <Link to='#medicines' className='navbar-links'>Medicines</Link>
            </li>
            <li>
                <Link to='#surgeries' className='navbar-links'>Surgeries</Link>
            </li>
            <li>
                <Link to='#software' className='navbar-links'>Software for Providers</Link>
            </li>
            <li>
                <Link to='#facilities' className='navbar-links'>Facilities</Link>
            </li>
        </ul>
        <button
            className='navbar-btn'
            type='button'
            disabled={isButtonDisabled}
            onClick={handleChatBtnClick}
        >
            My Bookings
        </button>

        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
            <div className="mobile-navbar-close">
                <FontAwesomeIcon icon={faXmark} onClick={openNav} className='hamb-icon'/>
            </div>
            <ul className='mobile-navbar-links'>
            <li>
                <Link to='/'  onClick={openNav}>Home</Link>
            </li>
            <li>
                <Link to='#doctors'  onClick={openNav}>Find Doctors</Link>
            </li>
            <li>
                <Link to='#hospitals'  onClick={openNav}>Hospitals</Link>
            </li>
            <li>
                <Link to='#medicines'  onClick={openNav}>Medicines</Link>
            </li>
            <li>
                <Link to='#surgeries'  onClick={openNav}>Surgeries</Link>
            </li>
            <li>
                <Link to='#software' onClick={openNav}>Software for Providers</Link>
            </li>
            <li>
                <Link to='#facilities'  onClick={openNav}>Facilities</Link>
            </li>
            </ul>
        </div>
        <div className="mobile-nav">
            <FontAwesomeIcon
                icon={faBars}
                onClick={openNav}
                className='hamb-icon'
            />
        </div>
    </div>
  )
}

export default Navbar