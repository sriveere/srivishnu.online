import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import {IoLogoJavascript} from 'react-icons/io'
import {BsTelephoneFill} from 'react-icons/bs'
import { useState } from 'react'
import Jello from 'react-reveal/Jello'
const Nav = () => {
  const [activeNav , setActiveNav] = useState('#')
  return (
    <nav>
      <Jello>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''} ><FaUser /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className = {activeNav === '#portfolio' ? 'active' : ''} ><IoLogoJavascript /></a>
      <a href="#toolkit" onClick={() => setActiveNav('#experience')} className = {activeNav === '#experience' ? 'active' : ''} ><MdWork /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className = {activeNav === '#contact' ? 'active' : ''} ><BsTelephoneFill /></a>
      </Jello>
    </nav>
  )
}

export default Nav