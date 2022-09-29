import React from 'react'
import './Banner.css'
import { Fade } from 'react-reveal'

export const Banner = () => {
  return (
    <>
        <div className='image'>

        <div className='h1'>
        <Fade bottom>
            <h1>
                We provide best gardering services
            </h1>

            <h3 className='h3'>
                Trust the grounds Guys professionals to take care of your commerical or residential grounds 
            </h3>

            <div className='button1'>
        <button type="button">View Our Services</button>
        </div>
        </Fade>
        </div>

        </div>

       
    </>
  )
}
