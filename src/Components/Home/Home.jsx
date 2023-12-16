import React,{useEffect} from "react";
import "./home.css";
import video from "../../Assets/video111.webm";
import { GrLocation } from "react-icons/gr";
import {FaFilter} from "react-icons/fa"
import {AiFillFacebook } from "react-icons/ai"
import {BsInstagram  } from "react-icons/bs"
import {SiTripadvisor  } from "react-icons/si"
import {BsListTask  } from "react-icons/bs"
import {TbApps  } from "react-icons/tb"

import Aos from "aos"
import 'aos/dist/aos.css'


const Home = () => {
  // create react hook to add a scroll animation

  useEffect(()=>
  {
    Aos.init({duration:2000})
  },[])
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/WebM"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">Our Packages</span>

          <h1 data-aos="fade-up"  className="homeTitle">Search Your Holiday  </h1>
        </div>


        <div data-aos="fade-up"  className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search Your Destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here...." />
              <GrLocation className="icon" />
            </div>
          </div>


          <div className="dateInput">
            <label htmlFor="date" placeholder="dd/mm/yyyy">Select your date: </label>
            <div className="input flex">
              <input type="date"  />
         
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price:</label>
              <h3 className="total">₹500000</h3>
            
            </div>
            <div className="input flex">
              <input type="range"max="500000" min="80000" />
            </div>
          </div>
          <div className="searchOptions flex">
            <FaFilter className="icon"/>
            <span>MORE FILTERS</span>
          </div>
        </div>
        <div data-aos="fade-up"  className="homeFooterIcons flex">
    <div className="rightIcons">
    <AiFillFacebook className="icon"/>
    <BsInstagram className="icon"/>
    <SiTripadvisor className="icon"/>
    </div>
    <div className="leftIcons">
    <BsListTask className="icon"/>
    <TbApps className="icon"/>
    </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
