import React from 'react'
import './Contactpage.css'
import RubberBand from 'react-reveal/RubberBand'
import {AiOutlineHome} from 'react-icons/ai'
import {FaTabletAlt} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import { Flip, Rotate } from 'react-reveal'
import { useState } from 'react'

const Contactpage = () => {

  const [user,setUser]  = useState({
    message:"",
    username:"",
    subject:"",
   })
  const handleInput=(e)=>{
   const {name,value} = e.target
   setUser({...user,[name]:value})
  }
  const handleSubmit=  async (e)=>{
   e.preventDefault()
   console.log(user)
   // const res = await fetch('',user)
  }

  return (
    <>
    <div className='imgcont'>

<div className='US'>
<RubberBand>
        <h1>
            Contact US
        </h1>
        </RubberBand>
        </div>
    </div>


    <div className='form5'>

        <div className='touch'>
        <h1>Get in Touch</h1>

        <div className='form6'>
        <Flip left>

        <form onSubmit={ (e)=> handleSubmit(e) }>
        
        <div className='area'> 

        <textarea type="text" name='message' value={user.message} placeholder='Enter message' onChange={(e)=> handleInput(e) }  />
        </div>
        <div className='name'>
        <input type="text" name='username' value={user.username} placeholder='Enter your name' onChange={(e)=> handleInput(e) } />
        <input type="text" name='username' value={user.username} placeholder='Email' onChange={(e)=> handleInput(e) } />
        </div>

        <div className='subject'>
        <input type="text" name='subject' value={user.subject} placeholder='Enter Subject' onChange={(e)=> handleInput(e) } />


        <div className='Send'>

        <button type='text'>Send</button> 
        </div>
        </div>
        </form>
        </Flip>

        </div>
        </div>


        <div className='outline'>
        <Rotate top>

        <div className='ai'>
        

        <div className='line'>
       
        <AiOutlineHome/> 
        </div>
        

        <div className='cali'>
        <h3>Buttonwood, California.</h3>
        <h4>Rosemead, CA 91770</h4>
        </div>



        </div>

        <div className='ai'>

<div className='line'>
<FaTabletAlt/>
</div>


<div className='cali'>
<h3>+1 253 565 2365</h3>
<h4>Mon to Fri 9am to 6pm</h4>
</div>



</div>



<div className='ai'>

<div className='line'>
<AiOutlineMail/>
</div>


<div className='cali'>
<h3>imdeepak@gmail.com</h3>
<h4>Send us your query anytime!</h4>
</div>


</div>

       

</Rotate>
        </div>

        


        </div>

        
        
         
    </>
  )
}

export default Contactpage

