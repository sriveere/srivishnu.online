import React from 'react'
import './whaticando.css'
import {BiCheck} from 'react-icons/bi'
import Slide from 'react-reveal/Slide'

const WhatICanDo = () => {
  return (
    <section id = 'whaticando'>
      <h5>Stuff I'm Good at</h5>
      <h2>What I can do for You</h2>
      <div className="container whaticando__container">
        
        {/*===========UI/UX Design=========*/}

        <Slide bottom cascade>
        <article className="whaticando">
          <div className="whaticando__head">
            <h3>UI/UX</h3>
          </div>
          <ul className="whaticando__list">
            <li>
              <BiCheck className = 'whaticando__list-icon'/>
              <p>Custom Web Design & Development</p>
            </li>
            <li>
              <BiCheck className = 'whaticando__list-icon'/>
              <p>Corporate Branding & Graphics Design</p>
            </li>
            <li>
              <BiCheck className = 'whaticando__list-icon'/>
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className = 'whaticando__list-icon'/>
              <p>Mobile App Design</p>
            </li>
            <li>
              <BiCheck className = 'whaticando__list-icon'/>
              <p>Online Experiences</p>
            </li>

          </ul>
        </article>
        {/*===========Web Development=========*/}
        
        <article className="whaticando">
          <div className="whaticando__head">
            <h3>webDevelopment</h3>
          </div>
          <ul className="whaticando__list">
            <li>
              <BiCheck className = 'whaticando__list-icon'/>
              <p>Build Customised 3-tier websites</p>
            </li>
            <li>
              <BiCheck className = 'whaticando__list-icon'/>
              <p>Web Portals with Oauth2.0 integration</p>
            </li>
            <li>
              <BiCheck className = 'whaticando__list-icon'/>
              <p>Fully Functional <br /> "E-commerce Store"</p>
            </li>
            <li>
              <BiCheck className = 'whaticando__list-icon'/>
              <p>Mobile App Development</p>
            </li>
            <li>
              <BiCheck className = 'whaticando__list-icon'/>
              <p>Corporate Web-Tools</p>
            </li>
            <li>
              <BiCheck className = 'whaticando__list-icon'/>
              <p>Building custom Projects <br /> on top of Open Source projects</p>
            </li>

          </ul>
        </article>

        {/*===========Content Creation=========*/}
        
        <article className="whaticando">
          <div className="whaticando__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="whaticando__list">
            <li>
              <BiCheck className = 'whaticando__list-icon'/>
              <p>Content Strategy</p>
            </li>
            <li>
              <BiCheck className = 'whaticando__list-icon'/>
              <p>Blog Posts</p>
            </li>
            <li>
              <BiCheck className = 'whaticando__list-icon'/>
              <p>Online Guides</p>
            </li>
            <li>
              <BiCheck className = 'whaticando__list-icon'/>
              <p>Video Creation</p>
            </li>
            <li>
              <BiCheck className = 'whaticando__list-icon'/>
              <p>Podcasts and Other Long Form Content</p>
            </li>

          </ul>
        </article>
        </Slide>
      </div>
    </section>
  )
}

export default WhatICanDo