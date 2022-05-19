import React from 'react'
import './header.css'
import ME from '../../assets/me.webp'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import HeaderEmail from './HeaderEmail'
import Typical from 'react-typical'
import Fade from 'react-reveal/Fade'
const Header = () => {
  return (
    <header>
      <Fade bottom cascade>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sri Vishnu</h1>
        <Typical className="text-light"
        steps = {[
          "An Enthusiastic Dev",
          1000,
          "A Fullstack Develloper",
          1000,
          "A Design Enthusiast",
          1000,
          "A MERN Stack Developer",
          1000,
          "A React / React-Native Developer" ,
          1000,
          "A Fullstack Develloper",
          5000,  
        ]} 
        loop = {30}
        /> 
        <h5 className='text-light' ><br /> Trying to build Stuff for Web that matters..</h5>
        <CTA />
        <HeaderSocials />
        <HeaderEmail />
        <div className="me">
          <img src={ME} alt="an emoji that kind of looks like me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll all the way down</a>

      </div>
      </Fade>
    </header>
  )
}

export default Header