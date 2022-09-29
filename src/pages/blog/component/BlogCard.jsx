import React from 'react'
import {BsFillPersonFill} from 'react-icons/bs'
import {FaRegComments} from 'react-icons/fa'



const BlogCard = (props) => {
  return (
    <>
    <div className="session6">
          <div className="boys">
          <img src={props.img} alt="" />
         
            <div className="sept">
              <h1>26 Sept</h1>
            </div>
          </div>

          <div className="side">
          <div className="google">
            <h2 className="inks">Google inks pact for new 35-storey office</h2>
            <p>
              That dominion stars lights dominion divide years for fourth have
              don't stars is that he earth it first without heaven in place seed
              it second morning saying.
            </p>
          </div>
          <div className="travel">
            <div>
              <BsFillPersonFill /> Travel, Lifestyle
            </div>
            |
            <div>
              <FaRegComments /> Comment(03)
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default BlogCard