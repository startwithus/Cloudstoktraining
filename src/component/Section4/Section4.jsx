import React from 'react'
import logo7 from '../../assets/img/visit_bg.jpg'
import './Section4.css'  
import logo8 from '../../assets/icons/xtestimonial.png.pagespeed.ic.-GuOChSpd7.webp'
import { Flip } from 'react-reveal'

const Section4 = () => {
  return (
    <>
    <div className="section4">

    <div className='pic-4'>
        <img src={logo7} alt="" />
    </div>

    <div >
    <div className='our'>
    <h1>Our Commitment</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur repudiandae vero, nam incidunt ex laborum eaque iste ut quaerat, saepe sapiente? Iusto quidem quia, facilis reiciendis ratione consectetur sint laudantium.</p>



<div className='logo8'>
    <img  src={logo8} alt="" />
    <h2>CloudStok</h2>
    <h3>Made By Deepak</h3>
    </div>
    </div>
<div className="view">
    <h4>View Services</h4>
</div>
    
    

    </div>

    <div>
    <div className='form'>
    <Flip left>
    <h2>Get Free Quote</h2>
        <input type="text" name="username" placeholder="Your Name"/>
        <input type="text" name="username" placeholder="Email"/>
        <input type="text" name="username" placeholder="Landscaping"/>
        <input className='message' type="text" name="username" placeholder="Message"/>
        </Flip>
</div>
       
       <div className='request'>
            <h1>Send Request</h1>
        </div>
       </div>
      
            
        </div>

       

        
    


   
    </>
  )
}

export default Section4