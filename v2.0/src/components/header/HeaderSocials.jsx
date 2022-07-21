import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import Wobble from 'react-reveal/Wobble'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <Wobble>
        <a href='https://linkedin.com/' id='social__icon' target="_blank" rel="noopener noreferrer"><BsLinkedin size={20}/></a>
        </Wobble>
        <Wobble>
        <a href='https://instagram.com/sri_wierdo/' id='social__icon' target="_blank" rel="noopener noreferrer"><BsInstagram size={20}/></a>
        </Wobble>
        <Wobble>
        <a href='https://github.com/sri_wierdo' id='social__icon' target="_blank" rel="noopener noreferrer"><BsGithub size={20}/></a>
        </Wobble>
        <Wobble>
        <a href='https://www.youtube.com/VishnuGadiVlogs' id='social__icon' target="_blank" rel="noopener noreferrer"><BsYoutube size={20}/></a>
        </Wobble>
    </div>
    
  )
}

export default HeaderSocials