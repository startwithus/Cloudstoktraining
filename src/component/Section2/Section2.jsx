import React from 'react'
import './Section2.css'
import logo3 from '../../assets/icons/icon.svg'
import { Roll } from 'react-reveal'

const Section2 = () => {
  return (
    <>
    <div className='section2'>

    <div className="icon1">
    <Roll left>
    <img src={logo3} alt=""/>
    

    <h1>We prefer quality first</h1>

    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique totam dolorem quibusdam odio unde fugiat? Tenetur, commodi. Suscipit ex unde similique eveniet velit voluptatibus? Enim iste quam quidem quia recusandae.</p>

</Roll>
    </div>

    <div className="icon1">
    <Roll Top>
    <img src={logo3} alt=""/>

    <h1>We prefer quality first</h1>

    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique totam dolorem quibusdam odio unde fugiat? Tenetur, commodi. Suscipit ex unde similique eveniet velit voluptatibus? Enim iste quam quidem quia recusandae.</p>

</Roll>
    </div>

    <div className="icon1">
    <Roll right>
    <img src={logo3} alt=""/>

    <h1>We prefer quality first</h1>

    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique totam dolorem quibusdam odio unde fugiat? Tenetur, commodi. Suscipit ex unde similique eveniet velit voluptatibus? Enim iste quam quidem quia recusandae.</p>

</Roll>
    </div>






    </div>




    </>
  )
}

export default Section2