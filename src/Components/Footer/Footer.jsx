import React ,{useEffect} from "react";
import "./footer.css";
import video2 from "../../Assets/video2.mp4";
import { BiSend } from "react-icons/bi";
import { SiYourtraveldottv } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";


import Aos from "aos"
import 'aos/dist/aos.css'


const Footer = () => {
  // create react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="enter your mail address" />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <BiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex ">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="" className="logo flex">
                <SiYourtraveldottv className="icon" />
                Destinations.com
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Destinations.com is your ultimate travel companion, offering a
              wide range of affordable packages for solo adventurers, couples,
              and families. Discover your dream destination and find flexible
              pricing tailored to your family's needs. Start your unforgettable
              journey with us!
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <FaTwitter className="icon " id="i1" />
              <FaYoutube className="icon " id="i2" />
              <FaInstagram className="icon" id="i3" />
              <SiTripadvisor className="icon" id="i4" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* group one */}
            <div data-aos="fade-up"  data-aos-duration="3000" className="linksGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Insurence
              </li>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Payment
              </li>
            </div>
            {/* group two */}
            <div data-aos="fade-up" 
            data-aos-duration="4000"
            className="linksGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Booking.com
              </li>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Agoda
              </li>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                MakeMyTrip
              </li>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Airbnb
              </li>
              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Rentcars
              </li>
            </div>
            {/* group three */}
            <div data-aos="fade-up"  data-aos-duration="5000" className="linksGroup">
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                London
              </li>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                California
              </li>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Indonesia
              </li>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Europe
              </li>
              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE 2023</small>
            <small>&copy; RESERVED-PRABIN 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
