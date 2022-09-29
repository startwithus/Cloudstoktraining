import React from 'react'
import'./Section.css'
import logo from '../../assets/img/xabout1.jpg.pagespeed.ic.ODlvUywVQD.webp'
import logo2 from '../../assets/img/xabout2.jpg.pagespeed.ic._PqnA1ycRq.webp'
import { Slide } from 'react-reveal'

const Section = () => {
  return (
    <>
    
    <div className='section'>
        <div className='since'>
        <h1 >We have been designing gardens since 1990</h1>

        <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante nisl, non feugiat null fermentum lobortis. Aenean placerat ipsum ut velit elementum, in sodales tellus viverra. Phasellus vestibulum, ex non lobortis faucibus.</p>

        <img className='pic' src={logo} alt=""/>
        </div>

        <div className="missioncard">
        <div className='mission'>
        <Slide left>
            <h1 >Our Mission</h1>
            <p className='lorem1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante nisl, non feugiat null fermentum lobortis.</p>
        
            <h1 className='mission1'>Our Mission</h1>
            <p className='lorem1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante nisl, non feugiat null fermentum lobortis.</p>
            </Slide>
        </div>
        <div className='button2'>
        <button type="button">Learn More About Us</button>
        </div>
        
        
        <div classname="pic-1">
        <img  src={logo2} alt="" />
        </div>
        </div>
        
        
      

    </div>
    </>
  )
}

export default Section;