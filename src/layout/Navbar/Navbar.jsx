import React from 'react';
import '../Navbar/Navbar.css';
import logo from '../../assets/img/logo.jpg';
// import logo1 from '../../assets/icons/icon.svg'
// import {a} from 'react-router-dom';
import {FiSearch} from 'react-icons/fi'
 const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <a href="/home"/>
            <img src={logo} alt="" />
            
        </div>
        <ul className='link'> 
            <a href="/"> Home </a>
            <a href="/services"> Services </a>
            <a href="/about"> About </a>
            <a href="/project"> Project </a>
            <a href="/blog"> Blog </a>
            <a href="/contact"> Contact </a>
        </ul>

        <div className='search'>
        <FiSearch/>
          {/* <img src={logo1} alt=""/> */}
        </div>

        <div className='button'>
        <button type="button">Get Free Quote</button>
        </div>
    </div>
  )
}
export default Navbar