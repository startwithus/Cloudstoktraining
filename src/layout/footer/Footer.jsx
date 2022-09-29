import React from 'react'
import logo9 from '../../assets/img/logo.jpg'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {SiIndeed} from 'react-icons/si'
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiFillHeart}from 'react-icons/ai'
import logo10 from '../../assets/img/footer-bg.jpg'
import { Flip, Rotate } from 'react-reveal'

const Footer = () => {
  return (
    <div>
    <div className='footer'>

    <div className='logo9'>
    <img src={logo9} alt="" />
    <div className='space'>

    <p4>Get the breathing space now, and we’ll extend your term at the other end.</p4>

    <div className='iconss'>
    <Flip left>

   <div className='facebook'> <BsFacebook/> </div>
    <div className="facebook"> <BsInstagram/> </div>
    <div className='facebook'><SiIndeed/> </div>
    <div className='facebook'><AiOutlineYoutube/> </div>
    </Flip>
    </div>

    </div>
 </div>

 <div className='services1'>
  <h1>Services</h1>
  <ul>
    <li>Lawn removal</li>
    <li>Landscaping</li>
    <li>Planting</li>
    <li>Watering</li>

  </ul>
 </div>



    <div className='Navigation'>
    <h1>Navigation</h1>
    <ul>
      <li>Home</li>
      <li>Services</li>
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>

    </div>

    <div className='us'>
    <h1>Contact us</h1>

    <ul>
      <li>consulto98@gmail.com</li>
      <li>76/A, Green road, NYC</li>
      <li>(80) 783 367-3904</li>
    </ul>



    </div>
    
    </div>

    <div className='copyright'>

    <p>Copyright ©2022 All rights reserved | This template is made with <AiFillHeart/> by Cloudstok</p>


    </div>

    <div className='last'>
    <img src={logo10} alt="" />

    </div>

    </div>
    

    
  
  )
}

export default Footer