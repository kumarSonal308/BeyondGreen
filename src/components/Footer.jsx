import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'

import {
   AiFillLinkedin,
   AiFillTwitterCircle,
   AiFillYoutube,
   AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
   return <footer>

      <div className='first'>
         <h1>Beyond Green</h1>
         <p>| @all right reserved</p>
         <p>| +919931693548</p>
      </div>

      <article className='iconsstyle'>
         
         <div className='name'>
             <h5>Follow US</h5>
         </div>
         
         <div className='iconlist'>
            <div>
            <a href="https://www.youtube.com/"><AiFillYoutube  style={{"color":"green", "font-size":"2.5rem", "hover":"" }} onClick={"https://www.youtube.com/@infocreator3098/featured"}  /> </a> 
             </div>

             <div>
            <a href='https://twitter.com/Sonalku83111163'><AiFillTwitterCircle style={{"color":"green", "font-size":"2.5rem"} } /> </a> 
             </div>

           <div >
             <a href='https://www.instagram.com/sonal_kumar_308/?hl=en'> <AiFillInstagram  style={{"color":"green", "font-size":"2.5rem"}}/></a>
            </div>

           <div >
              <a href ="https://www.linkedin.com/in/sonal-kumar-ab4693229/"AiFillLinkedin  style={{"color":"green", "font-size":"2.5rem"}} onClick={""}/>
            </div>

            

         </div>

      </article>
      
      <div className='needhelp'>
         <h5>NEED HELP</h5>
         <p>|  GET SUPPORT</p>
         <p>|  TALK TO A BRANCH</p>
         <p>|  TERMS and CONDITION</p>
         <p>|  PRIVACY POLICY</p>
      
      </div>

      

   </footer>

}

export default Footer