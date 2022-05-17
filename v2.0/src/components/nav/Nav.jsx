import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import {SiPurescript} from 'react-icons/si'
import {SiGooglemessages} from 'react-icons/si'
import { useState } from 'react'
const Nav = () => {
  const [activeNav , setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''} ><FaUser /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className = {activeNav === '#portfolio' ? 'active' : ''} ><SiPurescript /></a>
      <a href="#toolkit" onClick={() => setActiveNav('#experience')} className = {activeNav === '#experience' ? 'active' : ''} ><MdWork /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className = {activeNav === '#contact' ? 'active' : ''} ><SiGooglemessages /></a>
    </nav>
  )
}

export default Nav