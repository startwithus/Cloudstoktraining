import React from "react";
import "./Session6.css";

import BlogCard from "./BlogCard";
import logos from "../../../assets/img/xsingle_blog_1.jpg.pagespeed.ic.crhqX85fp0 copy.jpeg";
import logos1 from "../../../assets/img/xsingle_blog_2.jpg.pagespeed.ic.QwFRAzu_NP.webp";
import logos2 from "../../../assets/img/xsingle_blog_3.jpg.pagespeed.ic.D3so3ZMyuT.webp";
import logos3 from "../../../assets/img/xsingle_blog_4.jpg.pagespeed.ic.sPLUurA5SD.webp";
import logo4 from "../../../assets/img/xsingle_blog_5.jpg.pagespeed.ic.iAJ-fvqdoP.webp";
import post1 from "../../../assets/icons/post_1.jpg";
import post2 from "../../../assets/icons/post_2.jpg";
import post3 from "../../../assets/icons/post_3.jpg";
import post4 from "../../../assets/icons/post_4.jpg";
import post5 from "../../../assets/icons/post_5.jpg";
import post6 from "../../../assets/icons/post_6.jpg";
import post7 from "../../../assets/icons/post_7.jpg";
import post8 from "../../../assets/icons/post_8.jpg";
import post9 from "../../../assets/icons/post_9.jpg";
import post10 from "../../../assets/icons/post_1.jpg";
const session6 = () => {
  return (
    <>
      <div className="Session7">
        <div>
          <BlogCard img={logos} />
          <BlogCard img={logos1} />
          <BlogCard img={logos2} />
          <BlogCard img={logos3} />
          <BlogCard img={logo4} />
        </div>

        <div className="Form2">
          <div className="form1">
            <form>
              <input type="text" placeholder="Keyword Search"></input>
              <button className="text" type="text">
                Search
              </button>
            </form>
          </div>

          <div className="cat">
          <div className="cat-para">
            <h1>Category</h1>
          </div>
          <div className="cat-para">
          Resaurant food(37)
          </div>
          <div className="cat-para">
          Travel news(10)
          </div>
          <div className="cat-para">
          Modern technology(03)
          </div>
          <div className="cat-para">
          Product(11)
          </div>
          <div className="cat-para">
          Inspiration21
          </div>
          <div className="cat-para">
          Health Care (21)09
          </div>
          </div>

          <div>
            <div className="Post">
              <div className="Post1">
                <h1>
                  <u>Recent Post </u>
                </h1>

                <div className="imgpost">
                  <img src={post1} alt="" />

                  <div className="fish">
                    <h3>From life was you fish...</h3>
                    <p>27th Sept, 2022</p>
                  </div>
                </div>

                <div className="imgpost">
                  <img src={post2} alt="" />

                  <div className="fish">
                    <h3>The Amazing Hubble</h3>
                    <p>02 Hours ago</p>
                  </div>
                </div>

                <div className="imgpost">
                  <img src={post3} alt="" />

                  <div className="fish">
                    <h3>Astronomy Or Astrology</h3>
                    <p>03 Hours ago</p>
                  </div>
                </div>

                <div className="imgpost">
                  <img src={post4} alt="" />

                  <div className="fish">
                    <h3>Asteroids telescope</h3>
                    <p>01 Hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" tag">
            <h1>
              {" "}
              <u>Tag Clouds</u>
            </h1>

            <div className="love">
              <input type="text" placeholder="project"></input>
              <input type="text" placeholder="love"></input>
              <input type="text" placeholder="technology"></input>
              <input type="text" placeholder="travel"></input>
              <input type="text" placeholder="restaurant"></input>
              <input type="text" placeholder="life Style"></input>
              <input type="text" placeholder="Design"></input>
              <input type="text" placeholder="Illustration"></input>
            </div>
          </div>

          <div className="feed">
            <h1>
              {" "}
              <u>Instagram Feeds </u>
            </h1>

            <div className="insta">
              <img src={post5} alt="" />
              <img src={post6} alt="" />
              <img src={post7} alt="" />
              <img src={post8} alt="" />
              <img src={post9} alt="" />
              <img src={post10} alt="" />
            </div>
          </div>

          <div className="news">
            <div className="news">
              <h2>
                {" "}
                <u>NewsLetter</u>
              </h2>

              <div className="letter">
                <input type="text" placeholder="Enter email" />

                <div className="button5">
                  <button className="button" type="Button"> SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default session6;
