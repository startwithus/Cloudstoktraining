import React from "react";
import { Slide } from "react-reveal";
import oneimg from "../../assets/icons/services1.svg";
import twoimg from "../../assets/icons/services2.svg";
import threeimg from "../../assets/icons/services3.svg";
import fourimg from "../../assets/icons/services4.svg";
import fiveimg from "../../assets/icons/services5.svg";
import "./card.css";

const Card = () => {
  const data = [
    {
      img: oneimg,
      head: "Landscaping",
    },
    {
      img: twoimg,
      head: "Planting",
    },
    {
      img: threeimg,
      head: "Watering",
    },
    {
      img: fourimg,
      head: "Fence",
    },
    {
      img: fiveimg,
      head: "Removing",
    },
  ];
  return (
    <>
      <div className="outerbox">
        <div className="card">
        <Slide left>
          {data.map((e, i) => (
            <div className="box">
              <div className="">
                <img src={e.img} alt="" />
              </div>
              <div className="head">
                <h1> {e.head} </h1>
              </div>
            </div>
          ))}
          </Slide>
        </div>
        <p className="para">
          Check out our list of service for your garden and{" "}
          <span className="free">
            <u>get free quote</u>
          </span>{" "}
        </p>
      </div>
    </>
  );
};

export default Card;
