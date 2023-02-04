import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/6.png"
import img2 from "../assets/7.png"
import img3 from "../assets/8.png"
const Services = () => {
    return (
        
        <div className="servicepage">
                   <div className="logo">
                         <img src ={img1} alt ="loading"></img>
                   </div>
               
                    <div className="solidwaste">
                        <p>Solid Waste</p>
                        <div class = "about">
                            <p>
                             With a wide range of sophisticated, tailored services and operational capacity across India, Green Beyond
                             unified approach to environmental solutions and attention to customer care allows us to meet
                             any waste management challenge.
                            </p>
                        </div>
                        {/* <img>{img1}</img> */}
                    </div>

                    <div className="logo">
                         <img src ={img2} alt ="loading"></img>
                   </div>

                    <div className="LiquidandSpecialWaste">
                        <p>LIQUID & HAZARDOUS WASTE  </p>
                        <div class = "about">
                            <p>
                            From specialized collection, disposal and recycling services to HAZMAT emergency response, Green Beyonf has the equipment,
                             experience and trained personnel to safely handle a variety of complex hazardous and non-hazardous liquid waste management challenges.
                            </p>
                        </div>
                    </div>
                   
                    <div className="logo">
                         <img src ={img3} alt ="loading"></img>
                   </div>

                    <div className="BuisnessWaste">
                        <p>INFRASTRUCTURE</p>
                        <div class = "about">
                            <p>
                            Green Beyond Infrastructure Group has the experience, skills, resources and industry expertise to provide safe, integrated, first-on-site services 
                            for your infrastructure development or construction needs.
                            </p>
                        </div>
                    </div>

        </div>
    );
};

export default Services;