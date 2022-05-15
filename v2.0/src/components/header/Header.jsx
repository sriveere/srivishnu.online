import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import HeaderEmail from './HeaderEmail'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sri Vishnu</h1>
        <h5 className="text-light">I'm a Fullstack Develloper </h5>
        <CTA />
        <HeaderSocials />
        <HeaderEmail />
        <div className="me">
          <img src={ME} alt="a beautiful handsome bald gentleman" />
        </div>

        <a href="#contact" className="scroll__down">Scroll all the way down</a>

      </div>
    </header>
  )
}

export default Header