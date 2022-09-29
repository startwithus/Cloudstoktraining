import React from "react";
import "./Section3.css";
import logo4 from "../../assets/img/xproject1.jpg.pagespeed.ic.YBX_1-LqKd.webp";
import logo5 from "../../assets/img/xproject2.jpg.pagespeed.ic.xhN-Z8DOzV.webp";
import logo6 from "../../assets/img/xproject3.jpg.pagespeed.ic.IIlPjmEpcw.webp";
import Slider from "react-slick";

const Section3 = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  
    const data = [
      {
        img: logo4,
        heading: "Lawn removing",
        parasec: "lorem10",
      },
      {
        img: logo5,
        heading: "",
        parasec: "",
      },
      {
        img: logo6,
        heading: "",
        parasec: "",
      },
      {
        img: logo4,
        heading: "",
        parasec: "",
      },
      {
        img: logo5,
        heading: "",
        parasec: "",
      },
      {
        img: logo6,
        heading: "",
        parasec: "",
      },
      {
        img: logo4,
        heading: "",
        parasec: "",
      },
      {
        img: logo5,
        heading: "",
        parasec: "",
      },
      {
        img: logo6,
        heading: "",
        parasec: "",
      },
    ];


  return (
    <>
      <div className="section3">
        <div className="feature">
          <h1>Feature Projects</h1>
        </div>
        <Slider {...settings}>

        {data.map((e, i) => (
          
          <div className="picss">
            <div>
              <img src={e.img} alt="" />
            </div>
            <div className="heading">
          
              <h1>{e.heading}</h1>
            </div>
            <div className="parasec"> {e.parasec}
             </div>
          </div>
        
        ))}

      
   
        </Slider>
      </div>
    </>
  );
};

export default Section3;
