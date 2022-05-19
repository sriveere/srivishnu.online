import React from 'react'
import './footer.css'
import {BsFacebook} from'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <div className="footer__backtotop">
          <a href="#">Back to Top</a>
        </div>
        <div className="footer__copyright">
          <small> &#169; This website is made by me.. but I'm keeping this Repo public...Use it If you want to </small>
        </div>

      <div className="footer__socials">
        <a className='footer__logo' href="https://www.facebook.com/vishnugadikaburlu"><BsFacebook /></a>
        <a className='footer__logo' href="https://www.instagram.com/sri_wierdo"><BsInstagram /></a>
        <a className='footer__logo' href="https://www.twitter.com/sri_wierdo"><BsTwitter /></a>
        <a className='footer__logo' href="https://www.github.com/sri-wierdo"><BsGithub /></a>      
        </div>
    </footer>




  )
}

export default Footer