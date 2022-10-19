import React, { useState } from 'react'
import logo7 from '../../assets/img/visit_bg.jpg'
import './Section4.css'  
import logo8 from '../../assets/icons/xtestimonial.png.pagespeed.ic.-GuOChSpd7.webp'
import { Flip } from 'react-reveal'

const Section4 = () => {

    const [user,setUser]  = useState({
       username:"",
        email:"",
        land:"",
        message:""
       })
      const handleInput=(e)=>{
       const {name,value} = e.target
       setUser({...user,[name]:value})
      }
      const handleSubmit=  async (e)=>{
       e.preventDefault()
       console.log(user)
      }





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
    <form onSubmit={(e)=> handleSubmit(e)}>
        <input type="text" value={user.username} name="username" placeholder="Your Name"  onChange={(e)=> handleInput(e)}/>
        <input type="text" value={user.email} name="email" placeholder="Email"  onChange={(e)=> handleInput(e)}/>
        <input type="text" value={user.land} name="land" placeholder="Landscaping"  onChange={(e)=> handleInput(e)}/>
        <input className='message' value={user.message} type="text" name="message" placeholder="Message"  onChange={(e)=> handleInput(e)}/>
        <div className='request'>
            <button className='submit' type='submit'>Send Request</button>
        </div>
        </form>
        </Flip>
</div>
       
   
       </div>
      
            
        </div>

       

        
    


   
    </>
  )
}

export default Section4