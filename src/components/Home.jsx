import React from 'react'
import { Carousel } from "react-responsive-carousel";


import img1 from "../assets/1.png"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.png"
import img4 from "../assets/clean.png"
import img5 from "../assets/10.png"
// import img4 from "../assets/4.png"


const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <p>Providing sustainable environmental solutions across India </p>
                </main>
                <Carousel
                    infiniteLoop
                    autoPlay
                    showStatus={false}
                    showArrows={false}
                    showThumbs={false}
                    interval={1000}
                >
                    <div>
                        <img src={img1} alt="Item1" />
                        <p className="legend"><h2>Providing sustainable environmental solutions across India</h2></p>
                    </div>
                    <div>
                        <img src={img2} alt="Item3" />
                        <p className="legend"><h2>Green Today. Green For Life.</h2></p>
                    </div>
                    <div>
                        <img src={img3} alt="Item3" />
                        <p className="legend"><h2>Biggest Waste Disposal System.</h2></p>
                    </div>
                    <div>
                        <img src={img4} alt="Item3" />
                        <p className="legend"><h2>Towards Clean and Sustainable Environment.</h2></p>
                    </div>
                </Carousel>
            </div>

            <div className='home3' id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p> Beyond Green is the gold-standard program used by homes and businesses to make recycling simpler and more impactful.
                        Our Customer Solutions team manages over 10,000 customer locations in over 40 states across India delivering a
                        wide range of environmental services and zero waste solutions to its large and/or multi-site customers.

                    </p>
                </div>
            </div>

            <div className="home4" id="service">
             <div class ="serv">
                    <h1>Services</h1>
                    <div className='alllist'>
                       <ul typeof='circle'>
                            <li>RESEIDENTIAL WASTE COLLECTION</li>
                            <li>COMMERCIAL WASTE COLLECTION</li>
                            <li>INDUSTRIAL CLEANING SERVICES</li>
                        </ul>

                        <ul>
                            <li>DUMPSTER RENTAL SERVICES</li>
                            <li>LIQUID AND HAZARDOUS WASTE</li>
                            <li>SOIL REMEDIATION SERVICES</li>
                            <li>NATIONAL ACCOUNTS</li>
                        </ul>

                    </div>
               </div>
                <div class="logo">
                      <img src ={img5} height="750.87" width="1080" alt ="load"></img>
                </div>
               
            </div>
                    
                
        
        </>
    )
}

export default Home