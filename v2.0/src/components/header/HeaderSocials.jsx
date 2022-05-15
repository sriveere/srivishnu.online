import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://linkedin.com/' target="_blank" rel="noopener noreferrer"><BsLinkedin size={20}/></a>
        <a href='https://instagram.com/sri_wierdo/' target="_blank" rel="noopener noreferrer"><BsInstagram size={20}/></a>
        <a href='https://github.com/sri_wierdo' target="_blank" rel="noopener noreferrer"><BsGithub size={20}/></a>
        <a href='https://www.youtube.com/VishnuGadiVlogs' target="_blank" rel="noopener noreferrer"><BsYoutube size={20}/></a>
    </div>
    
  )
}

export default HeaderSocials