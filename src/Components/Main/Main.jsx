import React,{useEffect} from 'react'
import "./main.css";
import { GrLocation } from "react-icons/gr";
import {BsFillClipboardHeartFill} from "react-icons/bs"
import img from '../../Assets/img(1).jpg';
import img2 from '../../Assets/img(2).jpg';
import img3 from '../../Assets/img(3).jpg';
import img4 from '../../Assets/img(4).jpg';
import img5 from '../../Assets/img(5).jpg';
import img6 from '../../Assets/img(6).jpg';
import img7 from '../../Assets/img(7).jpg';
import img8 from '../../Assets/img(8).jpg';
import img9 from '../../Assets/img(9).jpg';
import img10 from '../../Assets/img(10).jpg';
import img11 from '../../Assets/img(11).jpg';
import img12 from '../../Assets/img(12).jpg';


import Aos from "aos"
import 'aos/dist/aos.css'


const Data=
[
{
  id:1,
  imgSrc:img,
  destTitle: 'Bora Bora',
  location: 'New Zealand',
  grade: 'CULTURAL RELAX',
  fees: '₹275000',
  description: ' Bora Bora, a tropical paradise in French Polynesia, captivates travelers with its turquoise lagoons, luxurious overwater bungalows, vibrant marine life, and serene island atmosphere. A heavenly escape for ultimate relaxation.' 
},
{
  id:2,
  imgSrc: img2,
  destTitle: 'Machu Picchu',
  location: 'Peru',
  grade: 'CULTURAL RELAX',
  fees: '₹300000',
  description: 'Machu Picchu, an awe-inspiring ancient Incan citadel in Peru, lures travelers with its mystical beauty, panoramic vistas, and profound historical significance. A spiritual journey back in time amid breathtaking Andean landscapes.' 
},
{
  id:3,
  imgSrc: img3,
  destTitle: 'Great Barrier Reef',
  location: 'Australia',
  grade: 'CULTURAL RELAX',
  fees: '₹350000',
  description: 'The Great Barrier Reef, a natural wonder in Australia, enthralls travelers with its vibrant marine life, stunning coral formations, and world-class diving and snorkeling experiences. A mesmerizing aquatic paradise to explore.' 
},
{
  id:4,
  imgSrc: img4,
  destTitle: 'Cappadocia',
  location: 'Turkey',
  grade: 'CULTURAL RELAX',
  fees: '₹150000',
  description: 'Cappadocia, a surreal wonderland in Turkey, amazes travelers with its unique rock formations, ancient cave dwellings, hot air balloon rides, and rich cultural heritage. A magical destination for extraordinary adventures..' 
},
{
  id:5,
  imgSrc: img5,
  destTitle: 'Guanajuato',
  location: 'Mexico',
  grade: 'CULTURAL RELAX',
  fees: '₹130000',
  description: 'Guanajuato, a captivating city in Mexico, captivates travelers with its vibrant colonial architecture, colorful streets, rich history, and lively atmosphere. An immersive journey through the heart of Mexican culture and charm.' 
},
{
  id:6,
  imgSrc: img6,
  destTitle: 'Cinque Terre',
  location: 'Italy',
  grade: 'CULTURAL RELAX',
  fees: '₹190000',
  description: 'Cinque Terre, a breathtaking coastal gem in Italy, enchants travelers with its colorful cliffside villages, scenic hiking trails, delectable cuisine, and Mediterranean charm. A coastal haven for wanderers seeking pure enchantment.' 
},
{
  id:7,
  imgSrc: img7,
  destTitle: 'Angkor Wat',
  location: 'Cambodia',
  grade: 'CULTURAL RELAX',
  fees: '₹65000',
  description: 'Angkor Wat, an awe-inspiring archaeological marvel in Cambodia, transports travelers through time with its ancient temples, intricate carvings, and mystical ambiance. A must-visit destination for history enthusiasts and intrepid explorers.' 
},
{
  id:8,
  imgSrc: img8,
  destTitle: 'Taj Mahal',
  location: 'India',
  grade: 'CULTURAL RELAX',
  fees: '₹30000',
  description: 'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays-and  adventurous activities' 
},
{
  id:9,
  imgSrc: img9,
  destTitle: 'Bali Island',
  location: 'Indonesia',
  grade: 'CULTURAL RELAX',
  fees: '₹100000',
  description: 'Bali, a dreamy travel destination, beckons with its idyllic beaches, lush landscapes, cultural treasures, and vibrant nightlife. An enchanting paradise for wanderers seeking an unforgettable journey of relaxation and exploration.' 
},
{
  id:10,
  imgSrc: img10,
  destTitle: 'Times Square',
  location: 'United State',
  grade: 'CULTURAL RELAX',
  fees: '₹500000',
  description: 'Experience the vibrant heartbeat of New York City at Times Square. A bustling and iconic destination filled with dazzling lights, entertainment, shopping, and the bustling energy of the Big Apple.' 
},
{
  id:11,
  imgSrc: img11,
  destTitle: 'Cape Town',
  location: 'South Affrica',
  grade: 'CULTURAL RELAX',
  fees: '₹330000',
  description: 'Cape Town, a captivating South African gem, captivates travelers with its Table Mountain backdrop, golden beaches, diverse culture, and vibrant city life. A perfect blend of natural beauty and urban charm.' 
},
{
  id:12,
  imgSrc: img12,
  destTitle: 'Santorini',
  location: 'Greece',
  grade: 'CULTURAL RELAX',
  fees: '₹400000',
  description: ' Santorini, a picturesque Greek island, enchants travelers with its breathtaking sunsets, charming white-washed buildings, crystal-clear waters, and unique volcanic landscapes. A romantic paradise for unforgettable moments.' 
},

]

const Main = () => {
  // create react hook to add a scroll animation
  useEffect(()=>
  {
    Aos.init({duration:2000})
  },[])






  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right"  className="title">
          Most Visited Destinations
        </h3>
      </div>
      <div className="secContent grid">


        {/*here i use high order array mmethod (map). To do that we shall use a list of object in an array . I am going to create an array named data and from that we shall .map()array to fetch each destinantions at once.*/ }
{
  Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>
  {
    return (
      <div key ={id}data-aos="fade-up" className="singleDestination">
        {/* here it will return singlr id from the map array */}

        <div className="imageDiv">
          <img src={imgSrc} alt="{destTitle}" />
        </div>
        <div className="cardInfo">
          <h4 className="destTitle">
            {destTitle}
          </h4>
          <span className="continent flex">
          <GrLocation className="icon"/>
          <span className="name">{location}</span>
          

          </span>
          <div className="fees flex">
            <div className="grade">
              <span>{grade} <small> +1</small></span>
            </div>
            <div className="price">
              <h5>{fees}</h5>
            </div>
          </div>
          <div className="desc">
            <p>{description}</p>
          </div>
          <button className='btn flex'>
          DETAILS <BsFillClipboardHeartFill className='icon'/>

          </button>
        </div>
      </div>
    )
  })
}

      </div>
    </section>
  )
}

export default Main