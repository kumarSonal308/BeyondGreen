import React from 'react'
// import { Link } from 'react-router-dom'
import {HashLink} from "react-router-hash-link"
import img2 from "../assets/planet-earth.png"
const Header = () => {
  return (
    <nav>
         <h1>Beyond Green</h1>
         <main>
             <HashLink to = "/#home">Home</HashLink>
             <HashLink to = "/Contact">Contact</HashLink>
             <HashLink to = "/#about">About</HashLink>
             <HashLink to = "/#service">Services</HashLink>
             <HashLink to = "/services">More</HashLink>
         </main>
    </nav>
  )
}

export default Header