import React from 'react'
import { Bounce } from 'react-reveal'
import './Projectpage.css'
import logo3 from '../../assets/img/xabout1.jpg.pagespeed.ic.ODlvUywVQD.webp'
import logo4 from '../../assets/img/xabout2.jpg.pagespeed.ic._PqnA1ycRq.webp'
import logo5 from '../../assets/img/xproject1.jpg.pagespeed.ic.YBX_1-LqKd.webp'

const Projectpage = () => {

    const data = [
        {
        img1: logo3,
        head1: "Deepak",
        para1: "Lorem ipsum dolor sit amet consectetur ",
        },
        {
            img1: logo4,
            head1:"Deepak",
            para1: "Lorem ipsum dolor sit amet consectetur",
            },
            {
                img1: logo5,
                head1: "Deepak",
                para1: "Lorem ipsum dolor sit amet consectetur",
                },
                {
                    img1: logo3,
                    head1:" Deepak",
                    para1: "Lorem ipsum dolor sit amet consectetur",
                    },
                    {
                        img1: logo4,
                        head1: "Deepak",
                        para1:"Lorem ipsum dolor sit amet consectetur",
                        },
                        {
                            img1: logo5,
                            head1: "Deepak",
                            para1: "Lorem ipsum dolor sit amet consectetur",
                            },
                            {
                                img1: logo3,
                                head1: "Deepak",
                                para1: "Lorem ipsum dolor sit amet consectetur",
                                },
                                {
                                    img1: logo4,
                                    head1: "Deepak",
                                    para1: "Lorem ipsum dolor sit amet consectetur",
                                    },
                                    {
                                        img1: logo5,
                                        head1: "Deepak",
                                        para1: "Lorem ipsum dolor sit amet consectetur",
                                        },

    ];


  return (
    <>
        <div className='image-8'>

            <div className='pro'>
            <Bounce left>
                <h1>Our Projects</h1>
                </Bounce>
            </div>
        </div>

        <div className=''>
            <div className='aws'>
            <h1>Some of our awesome project</h1>
            </div>
            </div>

            <div className='xcode'>
            {data.map((e,i) => (
                <div className="box">
              <div className="deep1">
                <img src={e.img1} alt="" />
              </div>
              
              <div className="head1">
                <h1> {e.head1} </h1>
              </div>
              <div className='para1'>
              <p>{e.para1}</p>
            </div>
            
            </div>
            
            ))}
            </div>
            </> 
            )

            }

export default Projectpage