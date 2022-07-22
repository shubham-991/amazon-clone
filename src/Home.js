import React from 'react'
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className = "home">
        <div class = "home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-2x._CB658860139_.jpg" alt="" />

            <div className="home__row">
                
                <Product id = "1234568 "title={"Atomic Habits: The life-changing million copy bestseller by James Clear | A supremely practical and useful book"} price={549} 
                image={'https://images-eu.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'} 
                rating={5}/>
                
                <Product id = "1234567" title={"Apple Macbook Pro | 2022 | with M2 chip | 33.74 cm (13.3-inch) Retina Display, 8GB RAM, 256GB SSD ​​​​​​​Storage | Space Grey ​​​​​​​"} price={129000} 
                image={'https://m.media-amazon.com/images/I/61L5QgPvgqL._SX522_.jpg'} 
                rating={5}/>
                
            </div>
            
            <div className="home__row">
                <Product id = "1234564" title={"boAt Airdopes 141 | 42H Playtime, Beast Mode ENx Tech, ASAP Charge (Bold Black)"} price={1499} 
                image={'https://images-eu.ssl-images-amazon.com/images/I/31GUbeFG3FL._SX300_SY300_QL70_FMwebp_.jpg'} 
                rating={4}/>

                <Product id = "1234563" title={"Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Blue)"} price={12999} 
                image={'https://m.media-amazon.com/images/I/61MbLLagiVL._SX342_.jpg'} 
                rating={4}/>

                <Product id = "1234567" title={"Rolling Nature Good Luck Money Plant in White Square Aroez Ceramic Pot"} price={699} 
                image={'https://m.media-amazon.com/images/I/61sThzjtVnL._SX679_.jpg'} 
                rating={3}/>

            </div>

            <div className="home__row">
                <Product id = "1234567" title={"Samsung Odyssey 27-inches - 68.4 cm 2560 x 1440 Pixels 1000R, 144 Hz, 1ms, FreeSync Premium, WQHD Curved Gaming QLED Monitor (LC27G55TQWWXXL, Black)"} price={23919} 
                image={'https://m.media-amazon.com/images/I/81cSdJuBbFL._SX355_.jpg'} 
                rating={5}/>
            </div>

        </div>

    </div>
  )
}

export default Home