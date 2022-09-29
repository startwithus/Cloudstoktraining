import React from 'react'
import './Contactpage.css'
import RubberBand from 'react-reveal/RubberBand'
import {AiOutlineHome} from 'react-icons/ai'
import {FaTabletAlt} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import { Flip, Rotate } from 'react-reveal'

const Contactpage = () => {
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
        
        <div className='area'> 

        <textarea type="text" placeholder='Enter message' />
        </div>
        <div className='name'>
        <input type="text" placeholder='Enter your name' />
        <input type="text" placeholder='Email' />
        </div>

        <div className='subject'>
        <input type="text" placeholder='Enter Subject' />


        <div className='Send'>

        <button type='text'>Send</button> 
        </div>
        </div>
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

